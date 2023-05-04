import HeadSeo from "../../components/Head";
import Modal from "../../components/Modal";
import HeaderTitle from "../../components/HeaderTitle";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const dataS = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { dataS },
  };
}

export default function Realisation(props) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  let data = [`/boats.jpg`, `/houses.jpg`];

  const { dataS } = props;

  const dataGallery = dataS.allGalleries;

  return (
    <>
      <HeadSeo title={`Pink Helmet - realizacje`} description={`opis opis`} />
      <HeaderTitle title="Realizacje" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto h-[70vh]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataGallery.map((el) => (
            <div
              onClick={() => {
                console.log(el);
                setImage(el);
                setOpen(!open);
              }}
              key={el.id}
              className="grid gap-4"
            >
              <Image
                src={el.image.responsiveImage}
                // width="50%"
                // height="50%"
                className="h-auto max-w-full rounded-lg"
              />
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
