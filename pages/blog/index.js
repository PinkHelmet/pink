import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import HeadSeo from "../../components/Head";

import { motion } from "framer-motion";

import Image from "next/image";

import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import siteMetadata from "../../data/siteMetadata";
import BlogCart from "../../components/BlogCart";

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
          <BlogCart el={el} index={index} list={true} key={index} />
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
