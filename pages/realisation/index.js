import HeadSeo from "../../components/Head";
import Modal from "../../components/Modal";
import HeaderTitle from "../../components/HeaderTitle";
import Image from "next/image";

import siteMetadata from "../../data/siteMetadata";
import { motion } from "framer-motion";
import { useState } from "react";

const dataGallery = Array.from({ length: 62 }, (_, index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    id: `realizacja-${number}`,
    image: {
      responsiveImage: {
        src: `/realizacja-${number}.webp`,
        title: `Realizacja Pink Helmet ${index + 1}`,
      },
    },
  };
});

export default function Realisation() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <>
      <HeadSeo
        title={siteMetadata.titleRealisation}
        description="Galeria zrealizowanych projektów"
      />

      <HeaderTitle title="Realizacje" />

      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto min-h-[70vh]"
      >
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
          {dataGallery.map((el) => (
            <div
              onClick={() => {
                setImage(el);
                setOpen(true);
              }}
              key={el.id}
              className="h-min w-full cursor-pointer"
            >
              <Image
                src={el.image.responsiveImage.src}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={el.image.responsiveImage.title}
                className="w-full h-auto object-cover rounded-lg"
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
