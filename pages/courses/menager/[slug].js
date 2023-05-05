import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import { motion } from "framer-motion";
// import styles from "../../styles/BlogPost.module.css";
import { request } from "../../../lib/datocms";
import HeadSeo from "../../../components/Head";
import RedirectButton from "../../../components/RedirectButton";

export default function BlogPost(props) {
  // const { postData } = props;
  const { data, error, status } = useQuerySubscription(props.subscription);
  const postData = data.articleMenager;

  if (!postData) return null;

  return (
    <>
      <HeadSeo
        title={`Pink Helmet - ${postData.title}`}
        description={postData.excerpt}
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
            <StructuredText data={postData.content} />
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
            <RedirectButton href="courses/local" redirectTo="Cofnij" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

const PATHS_QUERY = `
query MyQuery {
  allArticleMenagers {
    slug
  }
}
`;
export const getStaticPaths = async (context) => {
  const slugQuery = await request({
    query: PATHS_QUERY,
    preview: context.preview,
  });

  let paths = [];
  slugQuery.allArticleMenagers.map((p) =>
    paths.push(`/courses/menager/${p.slug}`)
  );

  return {
    paths,
    fallback: "blocking",
  };
};

const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  articleMenager(filter: {slug: {eq: $slug}}) {
        author {
          name
        }
        content {
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
            width
            webpSrcSet
            title
            srcSet
            src
            sizes
            height
            base64
            aspectRatio
            alt
            bgColor
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
        thirdImage {
          responsiveImage {
            width
            webpSrcSet
            title
            src
            sizes
            height
            bgColor
            base64
            aspectRatio
            alt
            srcSet
          }
        }
        title
        slug
        publishedDate
        id
        excerpt
  }
}
`;
export const getStaticProps = async ({ params, preview }) => {
  const graphqlRequest = {
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
    // If true, the Content Delivery API with draft content will be used
    preview,
  };
  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
    revalidate: 120,
  };
};
