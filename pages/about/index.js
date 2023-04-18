import Image from "next/image";
import { Lexend } from "next/font/google";
import { motion } from "framer-motion";
//components
import Head from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
//img
import aboutImg from "../../public/hero-about.jpg";

export default function About() {
  return (
    <>
      <Head title={`Pink Helmet - o Firmie`} description={`opis opis`} />
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
            alt="Image About"
            height={600}
            className="mx-auto"
          />
        </div>
        <div className={`md:w-6/12 m-6 font-medium`}>
          <h1 className="text-2xl m-6">Pink Helmet - Karolina Szuba</h1>
          <p className="mb-2">
            Od dawna moim marzeniem było prowadzić własną działalność
            gospodarczą. Daje to swego rodzaju wolność oraz nieopisaną
            satysfakcję budowania czegoś od podstaw. Stwierdziłam, że jednak
            najpierw chce się nauczyć jak najwięcej i znaleźć w życiu to co mnie
            dodatkowo fascynuje i co może mi zapewnić przysłowiowy chleb.
          </p>
          <p className="mb-2">
            Ukończyłam <strong>Politechnikę Warszawską</strong> na kierunku{" "}
            Inżynieria Środowiska, a następnie studia podyplomowe w{" "}
            <strong>Szkole Głównej Handlowej</strong> w Warszawie z zarządzania.
          </p>
          <p className="mb-2">
            W życiu robiłam wiele rzeczy... udzielałam korepetycji, sprzedawałam
            bieliznę, kosmetyki, pozyskiwałam darczyńców dla organizacji
            pozarządowych, zarządzałam projektami w call center, byłam
            koordynatorem biura i oferentem w agencji reklamowej, projektowałam
            instalacje przeciwpożarowe... Aż w 2020 r. trafiłam do firmy
            Deweloperskiej. O budownictwie wiedziałam mniej więcej tyle co o
            balecie - niewiele. Jednak okazało się, że wiedza którą dostawałam
            każdego dnia sama wchłaniała się w mój mózg niczym woda w gąbkę.
            Kupiłam mieszkanie. Niespodziewane wydarzenia zmusiły mnie do
            wykonania części prac wykończeniowych samodzielnie. Znowu uczyłam
            się wielu rzeczy praktycznie od zera, ale znowu ta wiedza
            przychodziła mi nad wyraz łatwo.
          </p>
          <p className="mb-2">
            Któregoś dnia stwierdziłam, że chyba już wewnętrzny głos, który do
            tej pory zawsze mówił „nie dasz sobie rady!”, „gdzie kobieta w
            budownictwie?” zaczyna zmieniać retorykę na tekst niczym z polskiego
            filmu „dlaczego nie?”. I tak o to powstał „
            <strong>Pink Helmet</strong>” 😊
          </p>
          <p className="fmb-2">
            A kim jestem prywatnie? Żoną, córką, wnuczką... i pancią gromady
            królików. Uwielbiam czytać, malować, pisać wiersze, jeść oraz
            pogłębiać wiedzę na różne tematy 😀
          </p>
        </div>
      </motion.section>
    </>
  );
}
