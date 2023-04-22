import { Image } from "react-datocms";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";

import { request } from "../../lib/datocms";
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
      <HeadSeo title={`Pink Helmet - szkolenia`} description={`opis opis`} />
      <HeaderTitle title="Szkolenia" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container min-h-screen flex flex-col md:flex-row mx-auto min-h-screen w-full"
      >
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
                <Link href={`/courses/${el.slug}`}>{el.title}</Link>
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
