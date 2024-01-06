import React from "react";
//next
import Image from "next/image";
//framer
import { motion } from "framer-motion";

export default function BlogCart({ el, index, list = false }) {
  if (!el) return null;

  return (
    <motion.a
      initial={{ y: "450px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0.1,
        delay: 0.6,
      }}
      href={`/blog/${el.slug}`}
      className={`flex flex-col justify-center items-center w-full p-4 ${
        list && "md:w-1/2 lg:w-1/3 p-4"
      }`}
      key={index}
    >
      <div className="h-64 mx-auto w-full group relative overflow-hidden">
        <Image
          src={el?.coverImage?.responsiveImage}
          alt={el?.coverImage?.responsiveImage.alt}
          fill
          className="absolute inset-0 mx-auto transition cover duration-300 group-hover:rotate-1 group-hover:scale-105 overflow-hidden"
        />
        <div className="absolute mx-auto inset-0 bg-black opacity-0 group-hover:opacity-50 group-hover:rotate-1 group-hover:scale-105 transition duration-300"></div>
        <p className="absolute top-1/2 -left-1/2 text-white uppercase text-2xl transform -translate-y-1/2 -translate-x-1/2 transition duration-300 group-hover:left-1/2">
          Czytaj więcej
        </p>
        <p className="absolute top-2 -left-1/2 text-white transition duration-300 group-hover:left-20">
          {el.datePublic}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{el.title}</h3>
      </div>
      <div className="w-1/2 mx-auto p-6">
        <span className="block border-t-2 border-pink-rose w-full"></span>
      </div>
    </motion.a>
  );
}
