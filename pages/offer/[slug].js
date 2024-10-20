import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import { motion } from "framer-motion";
import { request } from "../../lib/datocms";
//components
import HeadSeo from "../../components/Head";
import RedirectButton from "../../components/RedirectButton";

export default function BlogPost({ postData }) {
  if (!postData) return null;
  return (
    <>
      <HeadSeo
        title={`Pink Helmet - ${postData.title}`}
        description={postData.titleDesc}
      />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto "
        key={postData.id}
      >
        {postData?.coverImage?.responsiveImage && (
          <Image
            data={postData?.coverImage?.responsiveImage}
            className="w-auto cover mx-auto mb-6 self-center"
            alt={postData?.coverImage?.responsiveImage.alt}
          />
        )}

        <div className="flex flex-col justify-center text-justify leading-8 mx-2">
          <h1 className="text-4xl w-full text-center p-6">{postData?.title}</h1>
          <div className="my-4">
            <StructuredText data={postData.contentFirst} />
          </div>

          {postData?.secondImage?.responsiveImage && (
            <Image
              data={postData?.secondImage?.responsiveImage}
              className="w-auto cover mb-6 self-center"
            />
          )}
          <div className="my-4">
            <StructuredText data={postData.contentSecond} />
          </div>

          {postData?.thirdImage?.responsiveImage && (
            <Image
              data={postData?.thirdImage?.responsiveImage}
              className="w-auto cover mb-6 self-center"
            />
          )}

          <div className="my-4">
            <StructuredText data={postData.contentThird} />
          </div>

          <div className="self-center">
            <RedirectButton href="offer" redirectTo="Cofnij do ofert" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export const getServerSideProps = async ({ params, preview }) => {
  const OFFER_QUERY = `
    query MyQuery($slug: String) {
      offer(filter: { slug: { eq: $slug } }) {
        title
        titleDesc
        slug
        excerpt
        id
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
            width
            webpSrcSet
            title
          }
        }
        secondImage {
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
            alt
            aspectRatio
          }
        }
        thirdImage {
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
      }
    }
  `;

  const graphqlRequest = {
    query: OFFER_QUERY,
    variables: { slug: params.slug },
    preview,
  };

  const data = await request(graphqlRequest);

  return {
    props: {
      postData: data.offer,
    },
  };
};