import HeadSeo from "../../components/Head";
import Modal from "../../components/Modal";
import HeaderTitle from "../../components/HeaderTitle";
import Image from "next/image";
//meta
import siteMetadata from "../../data/siteMetadata";
import { motion } from "framer-motion";
import { useState } from "react";

import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
const HOMEPAGE_QUERY = `
query MyQuery {
  allGalleries {
    image {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        bgColor
        base64
        aspectRatio
        alt
        height
        sizes
        src
      }
    }
    id
  }
}
  
`;

export async function getStaticProps() {
  const data = {
    query: HOMEPAGE_QUERY,
  };
  return {
    props: {
      subscription: {
        ...data,
        initialData: await request(data),
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      },
    },
    revalidate: 10,
  };
}

export default function Realisation({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const dataGallery = data.allGalleries;

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <HeadSeo
        title={siteMetadata.titleRealisation}
        description={`Galeria zrealizowanych projektów`}
      />
      <HeaderTitle title="Realizacje" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        // className="container mx-auto mb-8 min-h-[70vh]"
        className="container mx-auto min-h-[70vh]"
      >
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
          {dataGallery?.map((el) => (
            <div
              onClick={() => {
                setImage(el);
                setOpen(!open);
              }}
              key={el.id}
              className="h-min w-full"
            >
              {/* <div className="w-1/2 p-1 md:p-2"> */}
              {el.image && (
                <Image
                  src={el.image.responsiveImage}
                  // className="h-auto max-w-full rounded-lg"
                  className="object-cover rounded-lg"
                />
              )}
              {/* </div> */}
            </div>
          ))}
        </div>
      </motion.section>
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          data={dataGallery}
          image={image}
          setImage={setImage}
        />
      )}
    </>
  );
}
