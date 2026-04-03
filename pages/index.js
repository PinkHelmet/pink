import { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
//custom hooks
import siteMetadata from "../data/siteMetadata";
import Link from "next/link";
import Image from "next/image";
import {
  AutoStoriesOutlined,
  CameraIndoorOutlined,
  ConstructionOutlined,
  KeyboardDoubleArrowDown,
  Key,
  FormatPaintOutlined,
  WaterDamageOutlined,
  PowerOutlined,
} from "@mui/icons-material";
import HeadSeo from "../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import face from "../public/face.webp";
// import the icons you need
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

export default function Home(props) {
  //ref
  let ref = useRef(null);
  let refSecond = useRef(null);
  let refThird = useRef(null);
  //inView
  const isInView = useInView(ref, { once: true });
  const isInViewSecond = useInView(refSecond, { once: true });
  const isInViewThird = useInView(refThird, { once: true });

  const { titleHome } = siteMetadata;

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "end end"],
  });

  let y;
  let opacity;

  return (
    <>
      <HeadSeo
        title={titleHome}
        description="Kompleksowe usługi z zakresu budownictwa i remontów: Odbiory techniczne mieszkań i domów od deweloperów, badania kamerą termowizyjną, 
        kierowanie budową domków jednorodzinnych, świadectwa energetyczne, remonty i wykończenia wnętrz."
      />

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-mobile_hero_bg md:bg-hero_bg bg-cover bg-center h-[90vh] shadow-lg"
      >
        <div className="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
          {" "}
          <div className="flex flex-col h-[10vh] justify-between items-center">
            <h2 className="text-center text-white font-bold text-3xl my-6 drop-shadow-lg">
              Zapraszamy do zapoznania się z naszą ofertą!
            </h2>

            <button className="bg-blue-700 hover:bg-blue-800 text-white drop-shadow-lg font-bold py-2 px-6 duration-100 rounded-full">
              <Link href="/offer">Tutaj!</Link>
            </button>
          </div>
          <div className={`absolute text-white text-6xl bottom-16 bounce`}>
            <KeyboardDoubleArrowDown className="text-6xl" />
          </div>
        </div>
      </motion.div>
      <section className={"overflow-hidden bg-white"}>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="container mx-auto w-full mt-24"
        >
          <div className="border-2 border-pink-rose rounded mx-4 bg-gray-100 relative shadow-lg">
            <Image
              src={face}
              alt="Pink Helmet owner face"
              width={120}
              height={120}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 origin-center rounded-full border-2 border-pink-rose"
            />
            <p className="my-24 mx-4 text-center leading-7">
              <span className="font-bold text-pink-rose">Pink Helmet </span>
              oferuje kompleksowe usługi z zakresu budownictwa oraz remontów mieszkań i domów tj.
              odbiory techniczne nieruchomości od deweloperów lub z rynku wtórnego, 
              kierowanie budową domków jednorodzinnych, opinie techniczne budowlane, 
              okresowe przeglądy budowlane, sporządzenie świadectw charakterystyki energetycznej, 
              badania kamerą termowizyjną, prace wykończeniowe i remontowe, budowę tarasów.
            </p>
          </div>
        </div>
      </section>
      <section
        ref={refSecond}
        style={{
          transform: isInViewSecond ? "none" : "translateX(-200px)",
          opacity: isInViewSecond ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="overflow-hidden"
      >
        <motion.div
          style={{ opacity, y }}
          className="flex w-100 container mx-auto flex-col items-center w-full py-10"
        >
        <motion.h1 className="text-3xl text-center drop-shadow-lg">
  Dlaczego Pink Helmet to dobry wybór?
</motion.h1>

<motion.ul className="font-normal p-6 space-y-3">
  <li className="flex items-start">
    <span className="text-pink-rose mr-2">✓</span>
     <span>kompleksowe usługi budowlane w jednym miejscu
    </span>
  </li>

  <li className="flex items-start">
    <span className="text-pink-rose mr-2">✓</span>
    <span>wysoka jakość prac i obsługi klienta</span>
  </li>

  <li className="flex items-start">
    <span className="text-pink-rose mr-2">✓</span>
    <span>dotrzymywanie uzgodnionych terminów</span>
  </li>

  <li className="flex items-start">
    <span className="text-pink-rose mr-2">✓</span>
    <span>porządek i czystość podczas prac</span>
  </li>
</motion.ul>
            
          </motion.p>
          <motion.p className="font-normal p-6">
            <span className="font-bold text-pink-rose">Pink Helmet</span>{" "}
            zajmuje się przede wszystkim kompleksową obsługą inżynieryjną z zakresu budownictwa. 
            Tutaj zadbamy o odbiór Twojemu domu lub mieszkania od Dewelopera,
            sprawdzimy ściany, dach i podłogi kamerą termowizyjną, napiszemy opinię techniczną
            w przypadku wad budowlanych, wykonamy przegląd okresowy budowlany Twojej nieruchomości. 
            Gdy zdecydujesz się sprzedać lub wynając swój lokal przygotujemy dla Ciebie świadectwo 
            charakterystyki energetycznej. Z przyjemnością obejmiemy również rolę kierownika budowy 
            przy budowie Twojego wymarzonego domu jednorodzinnego. 
          </motion.p>
          <motion.p className="font-normal p-6">
            Drugim filarem działalności są prace wykończeniowe i remonty. Oferujemy również 
            usługę projektowania wykończenia wnętrz aby zapewnić naszym klientom kompleksowe
            rozwiązania wykończeniowe lub remontowe. Wykonujemy zarówno wykończenia pod klucz jak
            i wykończenia samych łazienek. To ty ustalasz w jakim zakresie chcesz z nami pracować. 
          </motion.p>

<motion.div
  ref={refThird}
  style={{
    transform: isInViewThird ? "none" : "translateX(-200px)",
    opacity: isInViewThird ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  }}
  className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12 w-full px-4"
>
    <motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/kierownik-budowy-/-opinie-techniczne">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
      
      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <FontAwesomeIcon icon={faHandshake} style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Kierownik budowy i opinie techniczne
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/odbiory-techniczne-lokali">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <Key style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Odbiory techniczne lokali
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/projektowanie-wnetrz">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Projektowanie wnętrz
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/projektowanie-wnetrz">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Projektowanie wnętrz
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/projektowanie-wnetrz">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Projektowanie wnętrz
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/remonty-i-wykonczenia">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <FormatPaintOutlined style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Remonty i wykończenia
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/swiadectwa-charakterystyki-energetycznej">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <PowerOutlined style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Świadectwa charakterystyki energetycznej
      </p>

    </div>
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }}>
  <Link href="offer/badania-kamera-termowizyjna">
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="text-pink-rose text-white p-6 rounded-full mb-4">
        <CameraIndoorOutlined style={{ fontSize: 40 }} />
      </div>

      <p className="font-semibold">
        Badania kamerą termowizyjną
      </p>

    </div>
  </Link>
</motion.div>
</motion.div>
