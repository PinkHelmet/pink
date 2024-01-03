import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import HeadSeo from "../../components/Head";

import { motion } from "framer-motion";

import Image from "next/image";

import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import siteMetadata from "../../data/siteMetadata";

export default function Blog({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);
  const { titleBlog } = siteMetadata;

  const dataOffer = data.allBlogs;

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <HeadSeo title={titleBlog} description={"Blog opis"} />
      <HeaderTitle title="Blog" />
      <section className="mx-auto flex flex-col items-start md:flex-row flex-wrap min-h-[90vh]">
        {dataOffer.map((el, index) => (
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
            className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3 p-4"
            key={index}
          >
            <div className="h-64 mx-auto w-full group relative overflow-hidden">
              <Image
                src={el.coverImage.responsiveImage}
                alt={el.coverImage.responsiveImage.alt}
                width={500}
                height={288}
                className="absolute inset-0 mx-auto transition duration-300 group-hover:rotate-1 group-hover:scale-105 overflow-hidden"
              />
              <div className="absolute w-[500px] mx-auto inset-0 bg-black opacity-0 group-hover:opacity-50 group-hover:rotate-1 group-hover:scale-105 transition duration-300"></div>
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
          </motion.a>
        ))}
      </section>
    </>
  );
}
const HOMEPAGE_QUERY = `
query MyQuery {
  allBlogs {
    id
    datePublic
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        bgColor
        base64
        aspectRatio
        alt
        height
        sizes
      }
    }
    slug
    title
    titleDescription
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
    revalidate: 10, // enable ISR
  };
}
