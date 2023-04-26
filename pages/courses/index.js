import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
//img
import boats from "../../public/boats.jpg";
import houses from "../../public/houses.jpg";

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

  return (
    <>
      <HeadSeo
        title={`Pink Helmet - szkolenia`}
        description={`Strona z wyborem szkolen menadzerski lub szkolenia z zakresu rękojmi nieruchomości`}
      />
      <HeaderTitle title="Szkolenia" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container min-h-screen flex flex-col mx-auto min-h-screen w-full"
      >
        <>
          <div className="container mx-auto w-full min-h-fit">
            <div className="flex p-6">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in venenatis ligula, non mattis sapien. Aenean tortor eros,
                tincidunt sed ligula eu, fermentum faucibus magna. Aenean augue
                nisi, ornare a ullamcorper ut, dignissim semper tortor. Integer
                aliquet varius turpis, eu tempus diam dignissim ac. Aliquam
                porttitor nibh neque, ut hendrerit leo venenatis aliquam.
                Vestibulum ut dictum leo. Donec eu arcu in ligula efficitur
                mattis. Maecenas vestibulum, risus vel elementum ornare, felis
                eros maximus velit, in condimentum risus neque dictum arcu.
                Praesent at lorem cursus erat varius pulvinar. In nisl magna,
                feugiat quis scelerisque vitae, pretium nec tellus. Sed eu ante
                nunc.
              </p>
            </div>
            {/* <hr /> */}
            <div className="flex flex-col mx-auto w-full container md:flex-row my-6">
              <div className="w-full md:w-1/2 m-2 overflow-hidden relative bg-blend-darken">
                <Link href="/courses/menager">
                  <Image
                    src={boats}
                    className={`hover:scale-110 transition transition-500 brightness-75 `}
                  />
                  <p className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-4xl text-center text-white drop-shadow">
                    Szkolenia menadzerskie z zarządzania
                  </p>
                </Link>
              </div>
              <div className="w-full md:w-1/2 m-2 overflow-hidden relative ">
                <Link href="/courses/local">
                  <Image
                    src={houses}
                    className={`hover:scale-110 transition transition-500 brightness-75 `}
                  />
                  <p className="absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 text-4xl text-center text-white drop-shadow">
                    Szkolenia z zakresu rękojmi nieruchomości
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* {posts.map((el) => (
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
          ))} */}
        </>
      </motion.section>
    </>
  );
}
