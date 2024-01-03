import React from "react";
import { request } from "../../lib/datocms";

export default function BlogPost({ postData }) {
  console.log(postData, "❤");
  return <div>Blog Post</div>;
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
              blocks
            }
            contentSecondPoint {
              blocks
            }
            contentThirdPoint {
              blocks
            }
            contentFourthPoint {
              blocks
            }
            contentFifthPoint {
              blocks
            }
            contentSixthPoint {
              blocks
            }
            contentSeventhPoint {
              blocks
            }
            contentEighthPoint {
              blocks
            }
            contentNinthPoint {
              blocks
            }
            contentTenthPoint {
              blocks
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
