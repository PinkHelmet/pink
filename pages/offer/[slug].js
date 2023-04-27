import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import { request } from "../../lib/datocms";
//components
import HeadSeo from "../../components/Head";
import RedirectButton from "../../components/RedirectButton";

export default function BlogPost(props) {
  const { data, error, status } = useQuerySubscription(props.subscription);

  const postData = data.offer;

  return (
    <>
      <HeadSeo
        title={`Pink Helmet - ${postData.title}`}
        description={`opis opis`}
      />{" "}
      <div className="container mx-auto list-disc">
        {postData?.coverImage?.responsiveImage && (
          <Image
            data={postData?.coverImage?.responsiveImage}
            className="w-full cover max-h-1/2 mb-6 "
          />
        )}

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl w-full text-center p-6">{postData.title}</h1>
          <div className="text-xl list-disc list-inside  my-4">
            <StructuredText data={postData.contentFirst} />
          </div>

          {postData?.secondImage?.responsiveImage && (
            <Image
              data={postData?.secondImage?.responsiveImage}
              className="w-full cover max-h-1/2 my-6 "
            />
          )}
          <div className="text-xl list-disc list-inside my-4">
            <StructuredText data={postData.contentSecond} />
          </div>

          {postData?.thirdImage?.responsiveImage && (
            <Image
              data={postData?.thirdImage?.responsiveImage}
              className="w-full cover max-h-1/2 my-6"
            />
          )}

          <div className="text-xl list-disc list-inside my-4">
            <StructuredText data={postData.contentThird} />
          </div>

          <RedirectButton href="offer" redirectTo="Cofnij do ofert" />
        </div>
      </div>
    </>
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
