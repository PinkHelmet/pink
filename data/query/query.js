const BLOG_QUERY = `
      query MyQuery($slug: String) {
        blog(filter: { slug: { eq: $slug } }) {
            id
            datePublic
            title
            titleDescription
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
              secondContentEighthPoint {
                value
              }
              secondContentFifthPoint {
                value
              }
              secondContentFirstPoint {
                value
              }
              secondContentFourthPoint {
                value
              }
              secondContentNinthPoint {
                value
              }
              secondContentSecondPoint {
                value
              }
              secondContentSeventhPoint {
                value
              }
              secondContentSixthPoint {
                value
              }
              secondContentTenthPoint {
                value
              }
              secondContentThirdPoint {
                value
              }
              secondImageEighthPoint {
                responsiveImage {
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
                  width
                }
              }
              secondImageFifthPoint {
                responsiveImage {
                  alt
                  base64
                  aspectRatio
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
              secondImageFirstPoint {
                responsiveImage {
                  width
                  title
                  webpSrcSet
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
              secondImageFourthPoint {
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
              secondImageNinthPoint {
                responsiveImage {
                  width
                  webpSrcSet
                  title
                  srcSet
                  src
                  sizes
                  height
                  aspectRatio
                  alt
                  base64
                  bgColor
                }
              }
              secondImageSecondPoint {
                responsiveImage {
                  alt
                  aspectRatio
                  base64
                  height
                  bgColor
                  srcSet
                  title
                  webpSrcSet
                  width
                  sizes
                  src
                }
              }
              secondImageSeventhPoint {
                responsiveImage {
                  width
                  webpSrcSet
                  srcSet
                  src
                  sizes
                  height
                  bgColor
                  aspectRatio
                  alt
                  base64
                  title
                }
              }
              secondImageSixthPoint {
                responsiveImage {
                  width
                  webpSrcSet
                  title
                  srcSet
                  bgColor
                  base64
                  aspectRatio
                  alt
                  height
                  src
                  sizes
                }
              }
              secondImageTenthPoint {
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
              secondImageThirdPoint {
                responsiveImage {
                  width
                  webpSrcSet
                  title
                  srcSet
                  height
                  src
                  sizes
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

export default BLOG_QUERY;
