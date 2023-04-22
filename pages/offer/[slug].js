import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import { request } from "../../lib/datocms";

export default function BlogPost(props) {
  const { data, error, status } = useQuerySubscription(props.subscription);

  console.log(data);
  const postData = data.offer;

  return (
    <div className="container mx-auto">
      <Image
        data={postData.coverImage.responsiveImage}
        className="w-full cover max-h-1/2 "
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl w-full text-center p-6">{postData.title}</h1>

        <div className="mx-6">
          <StructuredText
            data={postData.contentFirst}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "ImageRecord":
                  return <Image data={record.image.responsiveImage} />;
                default:
                  return null;
              }
            }}
          />
        </div>

        {postData?.secondImage?.responsiveImage && (
          <Image
            data={postData?.secondImage?.responsiveImage}
            className="w-full cover max-h-1/2 my-6 "
          />
        )}
        <div className="mx-6">
          <StructuredText
            data={postData.contentSecond}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "ImageRecord":
                  return <Image data={record.image.responsiveImage} />;
                default:
                  return null;
              }
            }}
          />
        </div>

        {postData?.thirdImage?.responsiveImage && (
          <Image
            data={postData?.thirdImage?.responsiveImage}
            className="w-full cover max-h-1/2 my-6"
          />
        )}
        <div className="mx-6">
          <StructuredText
            data={postData.contentThird}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "ImageRecord":
                  return <Image data={record.image.responsiveImage} />;
                default:
                  return null;
              }
            }}
          />
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
  allOffers {
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
  slugQuery.allOffers.map((p) => paths.push(`/offer/${p.slug}`));

  return {
    paths,
    fallback: "blocking",
  };
};

const OFFER_QUERY = `
query MyQuery($slug: String) {
  offer(filter: {slug: {eq: $slug}}){
    title
    slug
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
export const getStaticProps = async ({ params, preview }) => {
  const graphqlRequest = {
    query: OFFER_QUERY,
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
