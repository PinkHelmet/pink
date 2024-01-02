import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import HeadSeo from "../../components/Head";

import Image from "next/image";

import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";

export default function Blog({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  const dataOffer = data.allOffers;
  console.log(dataOffer, "❤");

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <HeadSeo title={`Pink Helmet - Blog`} description={"Blog opis"} />
      <HeaderTitle title="Blog" />
      <section className="mx-auto flex flex-col md:flex-row flex-wrap">
        {dataOffer.map((el, index) => (
          <a
            href="#"
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
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{el.title}</h3>
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
const HOMEPAGE_QUERY = `
query MyQuery {
  allOffers {
    title
    orderText
    orderImage
    id
    excerpt
    contentFirst {
      value
    }
    contentSecond {
      value
    }
    contentThird {
      value
    }
    coverImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    secondImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    slug
    thirdImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        sizes
        height
        src
        srcSet
        title
        width
        webpSrcSet
      }
    }
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
