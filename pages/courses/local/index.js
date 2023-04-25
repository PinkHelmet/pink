import { motion } from "framer-motion";
import HeadSeo from "../../../components/Head";
import HeaderTitle from "../../../components/HeaderTitle";

import { Image } from "react-datocms";
import Link from "next/Link";

import { request } from "../../../lib/datocms";
const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    coverImage {
      url
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
    excerpt
    publishedDate
    slug
    author {
      name
    }
    content {
      value
    }
    id
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { data } = props;

  const posts = data.allArticles;
  // console.log(posts);
  return (
    <>
      <HeadSeo
        title={`Pink Helmet - szkolenia menadzerskie`}
        description={`opis opis`}
      />
      <HeaderTitle title="Szkolenia z zakresu rękojmi nieruchomości" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container min-h-screen flex flex-col mx-auto min-h-screen w-full"
      >
        <div className="container mx-auto w-full min-h-fit">
          <div className="flex p-6">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              venenatis ligula, non mattis sapien. Aenean tortor eros, tincidunt
              sed ligula eu, fermentum faucibus magna. Aenean augue nisi, ornare
              a ullamcorper ut, dignissim semper tortor. Integer aliquet varius
              turpis, eu tempus diam dignissim ac. Aliquam porttitor nibh neque,
              ut hendrerit leo venenatis aliquam. Vestibulum ut dictum leo.
              Donec eu arcu in ligula efficitur mattis. Maecenas vestibulum,
              risus vel elementum ornare, felis eros maximus velit, in
              condimentum risus neque dictum arcu. Praesent at lorem cursus erat
              varius pulvinar. In nisl magna, feugiat quis scelerisque vitae,
              pretium nec tellus. Sed eu ante nunc.
            </p>
          </div>
          <hr />
        </div>
        {posts.map((el) => (
          <div className="md:w-6/12 md:8/12 m-6 h-2/3 rounded-lg shadow-lg">
            <div className="rounded-lg">
              <Image
                data={el.coverImage.responsiveImage}
                className="rounded-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="my-4 text-2xl">
                <Link href={`/courses/local/${el.slug}`}>{el.title}</Link>
              </h2>
              <p className="font-thin">{el.excerpt}</p>
              <div className="flex justify-between py-6 font-thin text-xs">
                <span>Autor: {el.author.name}</span>
                <span>Publikowany: {el.publishedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.section>
    </>
  );
}
