import HeadSeo from "../../components/Head";
import Modal from "../../components/Modal";
import HeaderTitle from "../../components/HeaderTitle";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Realisation() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  let data = [`/boats.jpg`, `/houses.jpg`];
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
        <div className="flex flex-col w-full h-full justify-center items-center text-2xl">
          {data.map((el) => (
            <div
              onClick={() => {
                console.log(el);
                setImage(el);
                setOpen(!open);
              }}
            >
              <Image src={el} width={100} height={100} />
            </div>
          ))}
        </div>
      </motion.section>
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          data={data}
          image={image}
          setImage={setImage}
        />
      )}
    </>
  );
}
