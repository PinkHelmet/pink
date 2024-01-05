import React, { useEffect } from "react";

import { StructuredText } from "react-datocms";

import { motion } from "framer-motion";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Image from "next/image";
import { request } from "../../lib/datocms";
import HeadSeo from "../../components/Head";
import BlogCart from "../../components/BlogCart";

export default function BlogPost({ postData, allPosts }) {
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
    imageFirstPoint,
    contentFirstPoint,
    imageSecondPoint,
    contentSecondPoint,
    imageThirdPoint,
    contentThirdPoint,
    imageFouthPoint,
    contentFourthPoint,
    imageFifthPoint,
    contentFifthPoint,
    imageSixthPoint,
    contentSixthPoint,
    imageSeventhPoint,
    contentSeventhPoint,
    imageEighthPoint,
    contentEighthPoint,
    imageNinthPoint,
    contentNinthPoint,
    imageTenthPoint,
    contentTenthPoint,
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
  let filteredArrayOfTitles = arrayOfTitles.filter((el) => el !== "");

  const content = [
    {
      title: firstPoint,
      image: imageFirstPoint,
      content: contentFirstPoint,
    },
    {
      title: secondPoint,
      image: imageSecondPoint,
      content: contentSecondPoint,
    },
    {
      title: thirdPoint,
      image: imageThirdPoint,
      content: contentThirdPoint,
    },
    {
      title: fourthPoint,
      image: imageFouthPoint,
      content: contentFourthPoint,
    },
    {
      title: fifthPoint,
      image: imageFifthPoint,
      content: contentFifthPoint,
    },
    {
      title: sixthPoint,
      image: imageSixthPoint,
      content: contentSixthPoint,
    },
    {
      title: seventhPoint,
      image: imageSeventhPoint,
      content: contentSeventhPoint,
    },
    {
      title: eighthPoint,
      image: imageEighthPoint,
      content: contentEighthPoint,
    },
    {
      title: ninthPoint,
      image: imageNinthPoint,
      content: contentNinthPoint,
    },
    {
      title: tenthPoint,
      image: imageTenthPoint,
      content: contentTenthPoint,
    },
  ];

  //filtrowanie postów, aby nie zawierał aktualnego posta w polecanych
  const filteredPosts = allPosts.filter((el) => el.id !== postData.id);

  if (!postData) return null;

  return (
    <>
      <HeadSeo
        title={"Pink Helmet - tytul posta"}
        description={"Opis pod seo"}
      />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="mx-auto "
        key={postData.id}
      >
        {postData.coverImage.responsiveImage && (
          <Image
            src={postData.coverImage.responsiveImage}
            className="container w-auto cover mx-auto mb-6 self-center"
            alt={postData.coverImage.responsiveImage.alt}
          />
        )}
        <div
          id="top"
          className="flex flex-col justify-center text-justify leading-8 mx-2"
        >
          <h1 className="text-4xl w-full text-center p-6">{postData.title}</h1>

          <ol className="list-decimal p-6">
            {filteredArrayOfTitles.map((el, index) => (
              <li key={index} className="">
                <a
                  className="transition duration-300 hover:text-pink-rose"
                  href={`#${el}`}
                >
                  {el}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <section className="relative w-full flex flex-col lg:flex-row border-t-2">
          <div className="lg:w-9/12">
            {content &&
              content.map((el, index) => (
                <>
                  {el.title !== "" && (
                    <div key={index} id={el.title} className="min-h-[90vh]">
                      {el?.title && (
                        <h3 className="text-3xl text-center p-4">{el.title}</h3>
                      )}
                      {el?.image?.responsiveImage && (
                        <Image
                          src={el?.image?.responsiveImage}
                          className="w-4/6 mx-auto cover mb-6 self-center"
                          alt={postData.imageFirstPoint.responsiveImage.alt}
                        />
                      )}
                      {el?.content && (
                        <div className="mx-2 my-4 text-justify">
                          <StructuredText data={el?.content} />
                        </div>
                      )}
                      <div className="w-1/2 mx-auto p-6">
                        <span className="block border-t-2 border-pink-rose w-full"></span>
                      </div>
                    </div>
                  )}
                </>
              ))}
          </div>
          <div className="lg:w-3/12 border-t-2 lg:border-t-0 lg:border-l-2 relative">
            <div className="stickyClass p-2">
              <h3 className="text-center">Polecane Artykuły</h3>
              {filteredPosts.map((el, index) => (
                <BlogCart el={el} index={index} />
              ))}
            </div>
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
        allBlogs {
          id
          title
          slug
          datePublic
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
      allPosts: data.allBlogs,
    },
  };
};
