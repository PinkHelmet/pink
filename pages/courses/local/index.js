import { motion } from "framer-motion";
import HeadSeo from "../../../components/Head";
import HeaderTitle from "../../../components/HeaderTitle";

import { Image } from "react-datocms";
import Link from "next/link";

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
          <div className="flex flex-col p-6 text-justify leading-7">
            <p className="mb-4">
              Zgodnie z obowiązującym prawem Deweloper sprzedając mieszkanie lub
              dom musi udzielić Nabywcy 5-letniej rękojmi na nieruchomość.
              Oznacza to w praktyce, że Deweloper odpowiada za wszystkie wady
              ukryte zarówno fizyczne jak i prawne jakie posiada dana
              nieruchomość. Może to być przeciekający dach, mostki termiczne w
              izolacji termicznej ścian czy też np. pękająca elewacja na
              ścianach zewnętrznych budynku. Poziom obsługi posprzedażowej ma
              ogromny wpływ na ocenę danego Dewelopera w procesie zakupowym, a
              łatwy dostęp do informacji w Internecie ułatwia dzielenie się
              informacjami pomiędzy potencjalnymi Nabywcami.
            </p>
            <p className="mb-2">
              Zakres szkoleń z zakresu rękojmi nieruchomości prowadzonych przez
              <strong className="text-pink-rose"> Pink Helmet</strong> obejmuje
              m.in.:
            </p>
            <ul className="mb-2">
              <li>
                przegląd przepisów prawnych i ich wpływ na obsługę
                posprzedażową,
              </li>
              <li>
                optymalizację przyjmowania i rozpatrywania zgłoszeń usterkowych,
              </li>
              <li>
                przegląd typowych wad technicznych nieruchomości i wiele innych.
              </li>
            </ul>
            <p className="mb-2">
              Szkolenia mogą być przygotowane dokładnie pod Twoje potrzeby.
            </p>
            <p>Konkurencja nie śpi - a Ty? 😴</p>
          </div>
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
              <p>{el.excerpt}</p>
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
