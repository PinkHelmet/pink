import { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import siteMetadata from "../data/siteMetadata";
import Link from "next/link";
import Image from "next/image";
import {
  CameraIndoorOutlined,
  KeyboardDoubleArrowDown,
  Key,
  FormatPaintOutlined,
  PowerOutlined,
} from "@mui/icons-material";
import HeadSeo from "../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import face from "../public/face.webp";

export default function Home() {
  const ref = useRef(null);
  const refSecond = useRef(null);
  const refThird = useRef(null);

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
        description="Kompleksowe usługi budowlane: odbiory techniczne mieszkań, kierownik budowy, świadectwa energetyczne, badania kamerą termowizyjną, remonty i wykończenia."
      />

      {/* HERO */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-mobile_hero_bg md:bg-hero_bg bg-cover bg-center h-[90vh] shadow-lg"
      >
        <div className="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
          <div className="flex flex-col h-[10vh] justify-between items-center">
            <h1 className="text-center text-white font-bold text-3xl my-6 drop-shadow-lg">
              Odbiory techniczne mieszkań i domów od deweloperów, remonty i
              wykończenia wnętrz - Pink Helmet Piaseczno
            </h1>

            <button className="bg-blue-700 hover:bg-blue-800 text-white drop-shadow-lg font-bold py-2 px-6 duration-100 rounded-full">
              <Link href="/offer">Tutaj!</Link>
            </button>
          </div>

          <div className="absolute text-white text-6xl bottom-16 bounce">
            <KeyboardDoubleArrowDown />
          </div>
        </div>
      </motion.div>

      {/* O firmie */}
      <section className="overflow-hidden bg-white">
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
              alt="Pink Helmet owner"
              width={120}
              height={120}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full border-2 border-pink-rose"
            />

            <p className="my-24 mx-4 text-center leading-7">
              <span className="font-bold text-pink-rose">Pink Helmet </span>
              oferuje kompleksowe usługi z zakresu budownictwa oraz remontów
              mieszkań i domów: odbiory techniczne nieruchomości, kierowanie
              budową domów jednorodzinnych, opinie techniczne budowlane,
              przeglądy okresowe, świadectwa charakterystyki energetycznej,
              badania kamerą termowizyjną oraz remonty i wykończenia wnętrz.
            </p>
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section
        ref={refSecond}
        style={{
          transform: isInViewSecond ? "none" : "translateX(-200px)",
          opacity: isInViewSecond ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="overflow-hidden"
      >
        <motion.div className="container mx-auto flex flex-col items-center w-full py-10">
          <motion.h1 className="text-3xl text-center drop-shadow-lg">
            Dlaczego Pink Helmet to dobry wybór?
          </motion.h1>

          <motion.ul className="font-normal p-10 space-y-3">
            <li className="flex">
              <span className="text-pink-rose mr-2">✓</span>
              kompleksowe usługi budowlane w jednym miejscu
            </li>
            <li className="flex">
              <span className="text-pink-rose mr-2">✓</span>
              wysoka jakość prac i obsługi klienta
            </li>
            <li className="flex">
              <span className="text-pink-rose mr-2">✓</span>
              dotrzymywanie uzgodnionych terminów
            </li>
            <li className="flex">
              <span className="text-pink-rose mr-2">✓</span>
              porządek i czystość podczas prac
            </li>
          </motion.ul>

          {/* Usługi */}
          <motion.div
            ref={refThird}
            style={{
              transform: isInViewThird ? "none" : "translateX(-200px)",
              opacity: isInViewThird ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12 w-full px-4"
          >
            <ServiceCard
              href="offer/kierownik-budowy-/-opinie-techniczne"
              icon={<FontAwesomeIcon icon={faHandshake} />}
              title="Kierownik budowy i opinie techniczne"
            />
            <ServiceCard
              href="offer/odbiory-techniczne-lokali"
              icon={<Key />}
              title="Odbiory techniczne lokali"
            />
            <ServiceCard
              href="offer/projektowanie-wnetrz"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              title="Projektowanie wnętrz"
            />
            <ServiceCard
              href="offer/remonty-i-wykonczenia"
              icon={<FormatPaintOutlined />}
              title="Remonty i wykończenia"
            />
            <ServiceCard
              href="offer/swiadectwa-charakterystyki-energetycznej"
              icon={<PowerOutlined />}
              title="Świadectwa energetyczne"
            />
            <ServiceCard
              href="offer/badania-kamera-termowizyjna"
              icon={<CameraIndoorOutlined />}
              title="Badania kamerą termowizyjną"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Opinie */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Opinie naszych klientów
          </h2>
          <div className="grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-yellow-500 text-xl mb-3">★★★★★</p>
              <p className="italic">
                "Pani Karolina to prawdziwa profesjonalistka..."
              </p>
              <p className="mt-4 font-semibold">Konrad K.</p>
              <p className="text-sm text-gray-500">Opinia z Google</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-yellow-500 text-xl mb-3">★★★★★</p>
              <p className="italic">
                "Profesjonalna obsługa, Pani Karolina normy ma w małym
                paluszku..."
              </p>
              <p className="mt-4 font-semibold">Damian G.</p>
              <p className="text-sm text-gray-500">Opinia z Google</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-yellow-500 text-xl mb-3">★★★★★</p>
              <p className="italic">
                "Bardzo polecam usługi Karoliny i jej ekipy..."
              </p>
              <p className="mt-4 font-semibold">Szymon K.</p>
              <p className="text-sm text-gray-500">Opinia z Google</p>
            </div>
          </div>
          <a
            href="https://g.page/r/"
            target="_blank"
            className="inline-block mt-12 bg-pink-rose text-white px-8 py-3 rounded-full hover:opacity-90"
          >
            Zobacz więcej opinii w Google
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">
                Ile kosztuje odbiór techniczny mieszkania?
              </h3>
              <p className="text-gray-600 mt-2">
                Cena odbioru technicznego zależy od wielkości mieszkania,
                lokalizacji oraz zakresu kontroli.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Czy warto zrobić odbiór mieszkania z inżynierem?
              </h3>
              <p className="text-gray-600 mt-2">
                Profesjonalny odbiór techniczny pozwala wykryć usterki
                których często nie widać bez specjalistycznej wiedzy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Ile kosztuje wykończenie mieszkania pod klucz?
              </h3>
              <p className="text-gray-600 mt-2">
                Koszt wykończenia zależy od standardu materiałów, zakresu
                prac oraz metrażu mieszkania.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Jak długo trwa remont mieszkania?
              </h3>
              <p className="text-gray-600 mt-2">
                Standardowe wykończenie mieszkania trwa około 4-6 tygodni w
                zależności od zakresu prac.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ href, icon, title }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link href={href}>
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
          <div className="bg-pink-rose text-white p-6 rounded-full mb-4 text-2xl">
            {icon}
          </div>
          <p className="font-semibold">{title}</p>
        </div>
      </Link>
    </motion.div>
  );
}
