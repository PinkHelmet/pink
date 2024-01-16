import { motion } from "framer-motion";
import HeadSeo from "../../../components/Head";
import HeaderTitle from "../../../components/HeaderTitle";
//meta
import siteMetadata from "../../../data/siteMetadata";
import { Image, useQuerySubscription } from "react-datocms";
import Link from "next/link";

import { request } from "../../../lib/datocms";
const HOMEPAGE_QUERY = `
{
  allArticleMenagers {
    excerpt
    id
    slug
    title
    publishedDate
    author {
      name
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
        title
        webpSrcSet
        width
      }
    }
  }
}
`;

export async function getStaticProps() {
  const data = {
    query: HOMEPAGE_QUERY,
  };
  return {
    props: {
      subscription: {
        ...data,
        initialData: await request(data),
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      },
    },
    revalidate: 10, // enable ISR
  };
}

export default function Home({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  const posts = data.allArticleMenagers;

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading... </div>;

  return (
    <>
      <HeadSeo
        title={siteMetadata.titleManager}
        description={`Zarządzanie przedsiębiorstwem jest jak budowanie domu. Najpierw
              musi pojawić się koncepcja i projekt. Nie może zabraknąć
              kosztorysu (biznes plan, analiza strategiczna przedsiębiorstwa).
              Następnie solidne fundamenty (misja i wizja przedsiębiorstwa).
              Teraz można już wznosić ściany, stropy, posadzki (marketing,
              zatrudnienie pracowników, inwestycja w sprzęt, narzędzia,
              oprogramowanie). Na końcu kładziemy dach (znajdujemy klientów,
              budujemy silną markę wewnątrz i na zewnętrz, inwestujemy w
              szkolenia). Mimo, że dom już stoi to przed nami jeszcze długa
              droga do zamieszkania w nim i tak samo jest z przedsiębiorstwem –
              to codzienna praca i codzienne działania prowadzące do sukcesu.`}
      />
      <HeaderTitle title="Szkolenia menedżerskie z zarządzania" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container min-h-screen flex flex-col mx-auto min-h-screen w-full"
      >
        <div className="container mx-auto w-full min-h-fit">
          <div className="flex flex-col p-6 text-justify leading-7">
            <p className="mb-4">
              Zarządzanie przedsiębiorstwem jest jak budowanie domu. Najpierw
              musi pojawić się koncepcja i projekt. Nie może zabraknąć
              kosztorysu (biznes plan, analiza strategiczna przedsiębiorstwa).
              Następnie solidne fundamenty (misja i wizja przedsiębiorstwa).
              Teraz można już wznosić ściany, stropy, posadzki (marketing,
              zatrudnienie pracowników, inwestycja w sprzęt, narzędzia,
              oprogramowanie). Na końcu kładziemy dach (znajdujemy klientów,
              budujemy silną markę wewnątrz i na zewnętrz, inwestujemy w
              szkolenia). Mimo, że dom już stoi to przed nami jeszcze długa
              droga do zamieszkania w nim i tak samo jest z przedsiębiorstwem –
              to codzienna praca i codzienne działania prowadzące do sukcesu.
            </p>
            <p className="mb-4">
              W Polsce wiele przedsiębiorstw działa tak jakby mieszkali w
              niewykończonym domu. Jest to możliwe, dlaczego nie. Ale czy po to
              budowaliśmy ten dom? Przede wszystkim wiele firm nie inwestuje w
              największy zasób jaki posiada – w kadrę swoich pracowników. I tu
              nie chodzi tylko o szkolenia, kupowanie nowego sprzętu i
              optymalizowanie działań – co jest oczywiście szalenie ważne. Ale
              chodzi też o nowe sposoby zarządzania dostosowane do zmieniającego
              się rynku pracy oraz do zmieniającego się pokolenia pracowników i
              ich potrzeb.
            </p>
            <p className="mb-2">
              Zakres szkoleń menedżerskich prowadzonych przez Pink Helmet
              obejmuje m.in.:
            </p>
            <ul className="mb-2">
              <li>analizę strategiczną przedsiębiorstwa,</li>
              <li>negocjacje,</li>
              <li>marketing,</li>
              <li>optymalizowanie procesów w firmie,</li>
              <li>
                <b>zarządzanie kapitałem ludzkim,</b>
              </li>
              <li>dywersyfikację przedsiębiorstwa itp.</li>
            </ul>
            <p className="mb-2">
              Szkolenia mogą być przygotowane dokładnie pod Twoje potrzeby.
            </p>
            <p>Konkurencja nie śpi - a Ty? 😴</p>
          </div>
        </div>
        {posts.map((el) => (
          <Link
            href={`/courses/menager/${el.slug}`}
            className="md:w-6/12 md:8/12 m-6 h-2/3 rounded-lg shadow-lg"
          >
            <div className="rounded-lg">
              <Image
                data={el.coverImage.responsiveImage}
                className="rounded-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="my-4 text-2xl">{el.title}</h2>
              <p>{el.excerpt}</p>
              <div className="flex justify-between py-6 font-thin text-xs">
                <span>Autor: {el.author.name}</span>
                <span>Opublikowany: {el.publishedDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </motion.section>
    </>
  );
}
