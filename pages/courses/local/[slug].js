import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import { motion } from "framer-motion";
// import styles from "../../styles/BlogPost.module.css";
import { request } from "../../../lib/datocms";
import HeadSeo from "../../../components/Head";
import RedirectButton from "../../../components/RedirectButton";

export default function BlogPost(props) {
  // const { postData } = props;
  const { data, error, status } = useQuerySubscription(props.subscription);
  const postData = data.article;

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
        className="container mx-auto leading-8"
      >
        <Image
          data={postData.coverImage.responsiveImage}
          className="w-full cover max-h-1/2 "
        />
        <div className="container mx-auto">
          <h1 className="text-3xl w-full text-center p-6">{postData.title}</h1>

          <StructuredText data={postData.content} />
          <div className="flex justify-end font-extralight my-6">
            <p>
              {postData.author.name} / {postData.publishedDate}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <RedirectButton href="courses/local" redirectTo="Cofnij" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

const PATHS_QUERY = `
query MyQuery {
  allArticles {
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
  slugQuery.allArticles.map((p) => paths.push(`/courses/local/${p.slug}`));

  return {
    paths,
    fallback: "blocking",
  };
};

const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      name
    }
    content {
      value
    }
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        title
        aspectRatio
        alt
        base64
        bgColor
        height
        sizes
        src
        srcSet
      }
    }
    id
    publishedDate
    slug
    title
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
