import { Image } from "next/image";
import Navbar from "../components/Navbar";
import { Popover } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Architecture,
  KeyboardDoubleArrowDown,
  Key,
  FormatPaint,
} from "@mui/icons-material";
import HeadSeo from "../components/Head";

export default function Home(props) {
  return (
    <>
      <HeadSeo
        title={`Pink Helmet - strona główna`}
        description={`opis opis`}
      />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-hero_bg bg-cover bg-center h-[90vh] shadow-lg"
      >
        <div class="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
          {" "}
          <div className="flex flex-col h-[10vh] justify-between items-center">
            <h2 className="text-white font-bold text-3xl">
              Zapraszamy do zapoznania się z naszą ofertą!
            </h2>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 duration-100 rounded-full">
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
      <section className="min-h-screen container flex mx-auto w-full ">
        <div className="flex w-100 flex-col items-center w-full py-10">
          <h2 className="text-3xl drop-shadow-lg">Dlaczego Pink Helmet ?</h2>
          <p className="font-normal p-6">
            „Pink Helmet” zajmuje się przede wszystkim kompleksową obsługą
            inżynieryjną od momentu zakupu lokalu (sprawdzenie zapisów umowy
            deweloperskiej, sprawdzenie kompletności dokumentów, pomoc doradcza
            w zakresie zmian aranżacyjnych proponowanych przez Dewelopera) i
            jego odbioru od Dewelopera, poprzez usługi prac wykończeniowych i
            remontowych, projektowanie zabudów meblowych i ich montaż, doradztwo
            w zakresie aranżacji wnętrz oraz wykonanie systemu odprowadzania wód
            opadowych w ogrodzie.
          </p>
          <p className="font-normal p-6">
            Drugim filarem działalności są szkolenia dedykowane Deweloperom z
            zakresu rękojmi nieruchomości i obsługi posprzedażowej oraz
            szkolenia dedykowane przedsiębiorstwom z zakresu zarządzania
            przeznaczone dla kadry menedżerskiej.
          </p>
        </div>
      </section>
    </>
  );
}
