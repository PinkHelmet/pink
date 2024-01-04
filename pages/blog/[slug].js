import React, { useEffect } from "react";

import { StructuredText } from "react-datocms";

import { motion } from "framer-motion";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Image from "next/image";
import { request } from "../../lib/datocms";
import HeadSeo from "../../components/Head";

export default function BlogPost({ postData }) {
  console.log(postData, "❤");
  //Destrukturyzacja
  const {
    firstPoint,
    secondPoint,
    thirdPoint,
    fourthPoint,
    fifthPoint,
    sixthPoint,
    seventhPoint,
    eighthPoint,
    ninthPoint,
    tenthPoint,
  } = postData;

  //tablica z tytułami
  let arrayOfTitles = [
    firstPoint,
    secondPoint,
    thirdPoint,
    fourthPoint,
    fifthPoint,
    sixthPoint,
    seventhPoint,
    eighthPoint,
    ninthPoint,
    tenthPoint,
  ];
  console.log(postData, "😂😂");
  if (!postData) return null;

  useEffect(() => {
    const smoothScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    let listItems = document.querySelectorAll("ol li a");

    console.log(listItems, "😂");
    listItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        smoothScroll(event.target.getAttribute("href").substring(1));
      });
    });

    return () => {
      listItems.forEach((item) => {
        item.removeEventListener("click", smoothScroll);
      });
    };
  }, [arrayOfTitles, postData]);
  return (
    <>
      <HeadSeo
        title={"Pink Helmet - tytul posta"}
        description={"Opis pod seo"}
      />
      <motion.div
        id="top"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto "
        key={postData.id}
      >
        {postData.coverImage.responsiveImage && (
          <Image
            src={postData.coverImage.responsiveImage}
            className="w-auto cover mx-auto mb-6 self-center"
            alt={postData.coverImage.responsiveImage.alt}
          />
        )}
        <div className="flex flex-col justify-center text-justify leading-8 mx-2">
          <h1 className="text-4xl w-full text-center p-6">{postData.title}</h1>

          <ol>
            {arrayOfTitles.map((el, index) => (
              <li key={index}>
                <a href={`#${el}`}>{el}</a>
              </li>
            ))}
          </ol>
        </div>

        <section className="relative w-full">
          <div id={arrayOfTitles[0]} className="min-h-[90vh]">
            <h3>{arrayOfTitles[0]}</h3>
            {postData.imageFirstPoint.responsiveImage && (
              <Image
                src={postData.imageFirstPoint.responsiveImage}
                className="w-4/6 mx-auto cover mb-6 self-center"
                alt={postData.imageFirstPoint.responsiveImage.alt}
              />
            )}
            <div className="my-4">
              <StructuredText data={postData.contentFirstPoint} />
            </div>
          </div>

          <div id={arrayOfTitles[1]} className="min-h-[90vh]">
            <div>bla bla bla 2</div>
          </div>

          <div id={arrayOfTitles[2]} className="min-h-[90vh]">
            <div>bla bla bla 3</div>
          </div>

          <div className="fixed bottom-4 right-4 border p-3 rounded bg-pink-rose text-white hover:bg-pink-600 hover:text-white transition duration-300">
            <a href="#top">
              <KeyboardArrowUpIcon style={{ fontSize: 35 }} />
            </a>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export const getServerSideProps = async ({ params, preview }) => {
  const BLOG_QUERY = `
      query MyQuery($slug: String) {
        blog(filter: { slug: { eq: $slug } }) {
            id
            datePublic
            title
            slug
            firstPoint
            secondPoint
            thirdPoint
            fourthPoint
            fifthPoint
            sixthPoint
            seventhPoint
            eighthPoint
            ninthPoint
            tenthPoint
            contentFirstPoint {
              value
            }
            contentSecondPoint {
              value
            }
            contentThirdPoint {
              value
            }
            contentFourthPoint {
              value
            }
            contentFifthPoint {
              value
            }
            contentSixthPoint {
              value
            }
            contentSeventhPoint {
              value
            }
            contentEighthPoint {
              value
            }
            contentNinthPoint {
              value
            }
            contentTenthPoint {
              value
            }
            imageFirstPoint {
              responsiveImage {
                width
                webpSrcSet
                title
                srcSet
                src
                sizes
                height
                bgColor
                base64
                aspectRatio
                alt
              }
            }
            imageSecondPoint {
              responsiveImage {
                width
                webpSrcSet
                srcSet
                src
                sizes
                height
                aspectRatio
                alt
                base64
                bgColor
                title
              }
            }
            imageThirdPoint {
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
            imageFourthPoint {
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
            imageFifthPoint {
              responsiveImage {
                width
                webpSrcSet
                title
                srcSet
                sizes
                src
                height
                bgColor
                base64
                aspectRatio
                alt
              }
            }
            imageSixthPoint {
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
            imageSeventhPoint {
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
            imageEighthPoint {
              responsiveImage {
                alt
                aspectRatio
                base64
                bgColor
                height
                src
                sizes
                webpSrcSet
                width
                title
                srcSet
              }
            }
            imageNinthPoint {
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
            imageTenthPoint {
              responsiveImage {
                alt
                aspectRatio
                base64
                bgColor
                height
                src
                srcSet
                title
                webpSrcSet
                width
                sizes
              }
            }
            coverImage {
                responsiveImage {
                  width
                  webpSrcSet
                  title
                  srcSet
                  src
                  sizes
                  height
                  bgColor
                  base64
                  aspectRatio
                  alt
                }
              }
        }
      }
    `;

  const graphqlRequest = {
    query: BLOG_QUERY,
    variables: { slug: params.slug },
    preview,
  };

  const data = await request(graphqlRequest);

  return {
    props: {
      postData: data.blog,
    },
  };
};
