import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import {
  KeyboardDoubleArrowDown,
  Key,
  FormatPaintOutlined,
  WaterDamageOutlined,
} from "@mui/icons-material";
import HeadSeo from "../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import face from "../public/face.jpg";
// import the icons you need
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

export default function Home(props) {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0, 0.5", "1"],
  });

  let x = useTransform(scrollYProgress, [0, 0.8], ["-100%", "0%"]);
  let opacity = useTransform(scrollYProgress, [0.5, 1], [1, 1]);

  return (
    <>
      <HeadSeo
        title={`Pink Helmet - strona główna`}
        description={`opis opis`}
      />

      <motion.div
        ref={ref}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-hero_bg bg-cover bg-center h-[90vh] shadow-lg"
      >
        <div className="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
          {" "}
          <div className="flex flex-col h-[10vh] justify-between items-center">
            <h2 className="text-center text-white font-bold text-3xl my-6 drop-shadow-lg">
              Zapraszamy do zapoznania się z naszą ofertą!
            </h2>

            <button className="bg-blue-500 hover:bg-blue-700 text-white drop-shadow-lg font-bold py-2 px-6 duration-100 rounded-full">
              <Link href="/offer">Tutaj!</Link>
            </button>
          </div>
          <motion.div
            initial={{ bottom: "25px" }}
            animate={{ bottom: 0 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute text-white text-6xl bottom-16"
          >
            <KeyboardDoubleArrowDown className="text-6xl" />
          </motion.div>
        </div>
      </motion.div>
      <section>
        <motion.div
          style={{ opacity }}
          className="container mx-auto w-full mt-24"
        >
          <div className="border-2 border-pink-rose rounded mx-4 bg-gray-100 relative shadow-lg">
            <Image
              src={face}
              width={120}
              height={120}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 origin-center rounded-full border-2 border-pink-rose"
            />
            <p className="my-24 mx-4">
              Od dawna moim marzeniem było prowadzić własną działalność
              gospodarczą. Daje to swego rodzaju wolność oraz nieopisaną
              satysfakcję budowania czegoś od podstaw. Stwierdziłam, że jednak
              najpierw chce się nauczyć jak najwięcej i znaleźć w życiu to co
              mnie dodatkowo fascynuje i co może mi zapewnić przysłowiowy chleb.
            </p>
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div className="flex w-100 container mx-auto flex-col items-center w-full py-10">
          <motion.h2
            style={{ opacity, x }}
            className="text-3xl text-center drop-shadow-lg"
          >
            Dlaczego Pink Helmet ?
          </motion.h2>
          <motion.p style={{ opacity, x }} className="font-normal p-6">
            <span className="font-bold text-rose-600">„Pink Helmet”</span>{" "}
            zajmuje się przede wszystkim kompleksową obsługą inżynieryjną od
            momentu zakupu lokalu (sprawdzenie zapisów umowy deweloperskiej,
            sprawdzenie kompletności dokumentów, pomoc doradcza w zakresie zmian
            aranżacyjnych proponowanych przez Dewelopera) oraz odbioru
            technicznego od Dewelopera, poprzez usługi prac wykończeniowych i
            remontowych, projektowanie zabudów meblowych i ich montaż,
            projektowanie i doradztwo w zakresie aranżacji wnętrz oraz wykonanie
            systemu odprowadzania wód opadowych w ogrodzie. Wykonuje również
            świadectwa charakterystyki energetycznej domów oraz mieszkań.
          </motion.p>
          <motion.p style={{ opacity, x }} className="font-normal p-6">
            Drugim filarem działalności są szkolenia dedykowane Deweloperom z
            zakresu rękojmi nieruchomości i obsługi posprzedażowej oraz
            szkolenia dedykowane przedsiębiorstwom z zakresu zarządzania
            przeznaczone dla kadry menedżerskiej.
          </motion.p>

          <div className="flex flex-row w-full flex-wrap justify-between my-6 items-center">
            <motion.div
              style={{ opacity, x }}
              className="flex flex-col justify-center w-1/2 md:w-1/3 p-6"
            >
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ fontSize: 100, color: "#000" }}
                className="mb-4 drop-shadow-lg"
              />
              <p className="text-center">Doradztwo inżynieryjne</p>
            </motion.div>
            <motion.div
              style={{ opacity, x }}
              className="flex flex-col justify-center w-1/2 md:w-1/3 p-6"
            >
              <Key
                style={{ fontSize: 100, color: "#f1adc6" }}
                className="w-full mb-4 mx-auto drop-shadow-lg"
              />
              <p className="text-center">Odbiory techniczne lokali</p>
            </motion.div>
            <motion.div
              style={{ opacity, x }}
              className="flex flex-col justify-center w-1/2 md:w-1/3 p-6"
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ fontSize: 100, color: "#FFD700" }}
                className="mb-4 drop-shadow-lg"
              />
              <p className="text-center">Projektowanie</p>
            </motion.div>
            <motion.div
              style={{ opacity, x }}
              className="flex flex-col justify-center w-1/2 md:w-1/3 p-6"
            >
              <FormatPaintOutlined
                style={{ fontSize: 100, color: "#E11D48" }}
                className="w-full mx-auto mb-4 drop-shadow-lg"
              />
              <p className="text-center">Remonty i wykończenia</p>
            </motion.div>
            <motion.div
              style={{ opacity, x }}
              className="flex flex-col justify-center w-1/2 md:w-1/3 p-6"
            >
              <WaterDamageOutlined
                style={{ fontSize: 100, color: "#E11D48" }}
                className="w-full mb-4 mx-auto drop-shadow-lg"
              />
              <p className="text-center">Drenaze</p>
            </motion.div>
          </div>
          <p>sasa</p>
        </motion.div>
      </section>
    </>
  );
}
