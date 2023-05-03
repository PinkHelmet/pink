//next components
import Image from "next/image";
import Link from "next/link";
//framer
import { motion } from "framer-motion";
//icons
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
//components
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";

import { request } from "../../lib/datocms";
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
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Offer(props) {
  const { data } = props;

  const dataOffer = data.allOffers;

  return (
    <>
      <HeadSeo title={`Pink Helmet - oferta`} description={`opis opis`} />{" "}
      <HeaderTitle title="Oferta" />
      <section className="container min-h-screen flex flex-col md:flex-row mx-auto min-h-screen w-full flex-wrap">
        {dataOffer.map((offer) => (
          <>
            <div className="w-full flex flex-col md:flex-row md:relative items-center justify-center  gap-10 my-6">
              <motion.div
                // animate={animation}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.1,
                  delay: 0.6,
                }}
                key={dataOffer.id}
                className={`w-full md:w-1/2 flex ${offer.orderImage} h-auto md:rounded-lg overflow-hidden`}
              >
                <Image
                  src={offer.coverImage.responsiveImage}
                  height={"100%"}
                  alt={offer.coverImage.responsiveImage.alt}
                  className={"mx-auto"}
                />
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: 0.8,
                }}
                className={`w-full md:w-1/2 h-auto flex flex-col text-justify ${offer.orderText}`}
              >
                <h2 className="p-4 flex justify-center text-xl">
                  {offer.title}
                </h2>
                <p className="px-4 font-regular md:mb-8">{offer.excerpt}</p>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: 0.8,
                }}
                className="w-full flex justify-end md:absolute bottom-0 right-0"
              >
                <Link href={`/offer/${offer.slug}`} className={`mx-2`}>
                  Dowiedz się więcej
                  <ArrowRightAltOutlinedIcon />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.6,
              }}
              className="last:hidden w-full shadow border-b"
            ></motion.div>
          </>
        ))}
      </section>
    </>
  );
}
