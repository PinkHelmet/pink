import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
// import styles from "../../styles/BlogPost.module.css";
import { request } from "../../../lib/datocms";

export default function BlogPost(props) {
  // const { postData } = props;
  const { data, error, status } = useQuerySubscription(props.subscription);
  const postData = data.article;

  return (
    <div className="container mx-auto">
      <Image
        data={postData.coverImage.responsiveImage}
        className="w-full cover max-h-1/2 "
      />
      <div className="container mx-auto">
        <h1 className="text-3xl w-full text-center p-6">{postData.title}</h1>

        <StructuredText
          data={postData.content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageRecord":
                return <Image data={record.image.responsiveImage} />;
              default:
                return null;
            }
          }}
        />
        <div className="flex justify-end font-extralight my-6">
          <p>
            {postData.author.name} / {postData.publishedDate}
          </p>
        </div>
        <div style={{ marginTop: "50px" }}>
          <Link href="/">Back to the frontpage</Link>
        </div>
      </div>
    </div>
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
  slugQuery.allArticles.map((p) => paths.push(`/courses/menager/${p.slug}`));

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
