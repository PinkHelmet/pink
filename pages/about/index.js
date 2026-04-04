import Image from "next/image";
import { motion } from "framer-motion";

//meta
import siteMetadata from "../../data/siteMetadata";

//components
import Head from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";

//img
import aboutImg from "../../public/hero-about.webp";

export default function About() {
  return (
    <>
      <Head
        title={siteMetadata.titleAbout}
        description="Pink Helmet to firma budowlana działająca na terenie Piaseczna, Warszawy i okolic. Poznaj historię powstania firmy oraz doświadczenie jej właścicielki Karoliny Szuby."
      />

      <HeaderTitle title="O firmie" />

      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container flex flex-col md:flex-row mx-auto min-h-screen w-full mt-2"
      >

        <div className="md:w-6/12 m-6 h-2/3">
          <Image
            src={aboutImg}
            alt="Firma budowlana Pink Helmet Piaseczno"
            height={600}
            className="mx-auto"
          />
        </div>

        <div className="md:w-6/12 m-6 font-medium text-gray-800">

          <p className="mb-4">
            Firma Pink Helmet Karolina Szuba powstała w maju 2023 roku z pasji
            do budownictwa oraz chęci tworzenia usług opartych na rzetelności,
            wiedzy technicznej i dobrej komunikacji z klientem.
          </p>

          <p className="mb-4">
            Firma działa głównie na terenie Piaseczna, Warszawy oraz okolicznych
            miejscowości. Każda inwestycja traktowana jest indywidualnie,
            a celem firmy jest zapewnienie klientom poczucia bezpieczeństwa
            oraz komfortu podczas realizacji prac budowlanych i wykończeniowych.
          </p>

          <p className="mb-4">
            Właścicielką firmy jest Karolina Szuba – absolwentka
            <strong> Politechniki Warszawskiej </strong>
            na kierunku Inżynieria Środowiska oraz studiów podyplomowych
            menedżerskich w
            <strong> Szkole Głównej Handlowej w Warszawie</strong>.
          </p>

          <p className="mb-4">
            Pink Helmet to firma, która stawia na wysoką jakość realizacji,
            terminowość oraz transparentną komunikację z klientem. Celem jest
            budowanie marki, która kojarzy się z profesjonalizmem,
            zaufaniem i rzetelnym podejściem do każdego projektu.
          </p>

        </div>

      </motion.section>
    </>
  );
}
