import Image from "next/image";
import { Lexend } from "next/font/google";
import { motion } from "framer-motion";
//meta
import siteMetadata from "../../data/siteMetadata";
//components
import Head from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
//img
import aboutImg from "../../public/hero-about.webp";
import logo from "../../public/logo.png";

export default function About() {
  return (
    <>
      <Head
        title={siteMetadata.titleAbout}
        description={`Od dawna moim marzeniem było prowadzić własną działalność
            gospodarczą. Daje to swego rodzaju wolność oraz nieopisaną
            satysfakcję budowania czegoś od podstaw. Stwierdziłam, że jednak
            najpierw chce się nauczyć jak najwięcej i znaleźć w życiu to co mnie
            dodatkowo fascynuje i co może mi zapewnić przysłowiowy chleb.`}
      />
      <HeaderTitle title="O firmie" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container flex flex-col md:flex-row mx-auto min-h-screen w-full mt-2"
      >
        <div className="md:w-6/12 md:8/12 m-6 h-2/3">
          <Image
            src={aboutImg}
            alt="Pink Helmet image"
            height={600}
            className="mx-auto"
          />
        </div>
        <div className={`md:w-6/12 m-6 font-medium`}>
          <div className="flex w-full items-center gap-12 mb-4">
            <h1 className="text-2xl my-6">
              Marka <strong className="text-pink-rose">Pink Helmet</strong>
            </h1>
            <Image
              src={logo}
              alt="Picture of the author"
              width="150"
              height="150"
            />
          </div>

          <p className="mb-2">
            Firma Pink Helmet Karolina Szuba powstała w maju 2023 r, jako
            pokłosie marzeń i ciężkiej pracy jej właścicielki Karoliny Szuby.
          </p>
          <p className="mb-2">
            W związku z dynamicznym rozwojem firmy w marcu 2024 r. marka Pink
            Helmet podzieliła się na Pink Helmet Karolina Szuba, realizująca
            usługi inżynierskie z zakresu budownictwa: doradztwo inżynieryjne,
            odbiory lokatorskie nieruchomości, badania termowizyjne, świadectwa
            energetyczne, projektowanie, szkolenia oraz prace ogrodnicze tj.
            odwodnienia, niwelacja gruntu, budowa tarasów i nie tylko oraz Pink
            Helmet Sp. z o.o. zajmująca się remontami i wykończeniami
            nieruchomości.
          </p>
          <p className="mb-2">
            A kim jest Karolina? Absolwentką <strong>Politechniki Warszawskiej</strong> na
            kierunku Inżynieria Środowiska oraz absolwentką studiów
            podyplomowych menedżerskich w <strong>Szkole Głównej Handlowej </strong>w Warszawie.
            Przez lata zdobywała doświadczenie w wielu branżach by ostatecznie
            związać się z budownictwem. Jej marzeniem zawodowym jest stworzyć
            silną, konkurencyjną markę w branży, która ze względu na dużą ilość
            nierzetelnych firm jest obecnie postrzegana dość negatywnie wśród
            społeczeństwa. Celem Pink Helmet jest przekonać klientów, że remonty
            i wykończenia nie muszą „wykańczać” również psychicznie i finansowo.
            Można zrobić coś raz i dobrze, bez zbędnej zwłoki w terminach.
          </p>
          <p className="mb-2">
            Natomiast misją Pink Helmet jest droga od kompleksowej mikrofirmy
            inżynieryjnej po zmianę prowadzenia działalności gospodarczych w
            Polsce, również w innych branżach, dzięki szkoleniom menedżerskim
            oferowanym przez Karolinę Szubę.
          </p>
        </div>
      </motion.section>
    </>
  );
}
