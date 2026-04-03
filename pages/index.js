import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import siteMetadata from "../data/siteMetadata";
import Link from "next/link";

import {
  CameraIndoorOutlined,
  Key,
  FormatPaintOutlined,
  PowerOutlined,
} from "@mui/icons-material";

import HeadSeo from "../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const refSecond = useRef(null);
  const refThird = useRef(null);

  const isInViewSecond = useInView(refSecond, { once: true });
  const isInViewThird = useInView(refThird, { once: true });

  const { titleHome } = siteMetadata;

  return (
    <>
      <HeadSeo
        title={titleHome}
        description="Kompleksowe usługi budowlane: odbiory techniczne mieszkań, kierownik budowy, świadectwa energetyczne, badania kamerą termowizyjną, remonty i wykończenia."
      />

      {/* Hero */}
      <section className="bg-fixed bg-blend-overlay bg-no-repeat bg-mobile_hero_bg md:bg-hero_bg bg-cover bg-center h-[90vh] shadow-lg flex items-center justify-center">
        <div className="text-center text-white backdrop-brightness-50 p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg mb-6">
            Odbiory techniczne mieszkań i domów od deweloperów, remonty i wykończenia wnętrz - Pink Helmet Piaseczno
          </h1>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl drop-shadow-lg">
            <Link href="/offer">Tutaj!</Link>
          </button>
        </div>
      </section>

      {/* Usługi */}
      <section
        ref={refThird}
        style={{
          transform: isInViewThird ? "none" : "translateY(50px)",
          opacity: isInViewThird ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="py-24 bg-gray-100"
      >
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 px-4">
          <ServiceCard
            href="offer/kierownik-budowy-/-opinie-techniczne"
            icon={<FontAwesomeIcon icon={faHandshake} style={{ fontSize: 36 }} />}
            title="Kierownik budowy i opinie techniczne"
          />
          <ServiceCard
            href="offer/odbiory-techniczne-lokali"
            icon={<Key style={{ fontSize: 36 }} />}
            title="Odbiory techniczne lokali"
          />
          <ServiceCard
            href="offer/projektowanie-wnetrz"
            icon={<FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: 36 }} />}
            title="Projektowanie wnętrz"
          />
          <ServiceCard
            href="offer/remonty-i-wykonczenia"
            icon={<FormatPaintOutlined style={{ fontSize: 36 }} />}
            title="Remonty i wykończenia"
          />
          <ServiceCard
            href="offer/swiadectwa-charakterystyki-energetycznej"
            icon={<PowerOutlined style={{ fontSize: 36 }} />}
            title="Świadectwa energetyczne"
          />
          <ServiceCard
            href="offer/badania-kamera-termowizyjna"
            icon={<CameraIndoorOutlined style={{ fontSize: 36 }} />}
            title="Badania kamerą termowizyjną"
          />
        </div>
      </section>

      {/* Dlaczego my */}
      <section
        ref={refSecond}
        style={{
          transform: isInViewSecond ? "none" : "translateY(50px)",
          opacity: isInViewSecond ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Dlaczego Pink Helmet to dobry wybór?</h2>
          <ul className="text-lg md:text-xl space-y-5">
            <li className="flex items-start"><span className="text-pink-rose mr-3 text-3xl">✓</span>Kompleksowe usługi budowlane w jednym miejscu</li>
            <li className="flex items-start"><span className="text-pink-rose mr-3 text-3xl">✓</span>Wysoka jakość prac i obsługi klienta</li>
            <li className="flex items-start"><span className="text-pink-rose mr-3 text-3xl">✓</span>Dotrzymywanie uzgodnionych terminów</li>
            <li className="flex items-start"><span className="text-pink-rose mr-3 text-3xl">✓</span>Porządek i czystość podczas prac</li>
          </ul>
        </div>
      </section>

      {/* Opinie */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Opinie naszych klientów</h2>
          <div className="grid md:grid-cols-3 gap-12 px-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-yellow-500 text-2xl mb-3">★★★★★</p>
              <p className="italic text-lg md:text-xl">
                "Pani Karolina to prawdziwa profesjonalistka w dziedzinie technicznej. Dzięki niej rozwiązałem problem w swoim domu."
              </p>
              <p className="mt-4 font-semibold">Konrad K.</p>
              <p className="text-sm text-gray-500">Opinia z Google</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-yellow-500 text-2xl mb-3">★★★★★</p>
              <p className="italic text-lg md:text-xl">
                "Profesjonalna obsługa, normy w małym paluszku, wszystko dokładnie i szybko."
              </p>
              <p className="mt-4 font-semibold">Damian G.</p>
              <p className="text-sm text-gray-500">Opinia z Google</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-yellow-500 text-2xl mb-3">★★★★★</p>
              <p className="italic text-lg md:text-xl">
                "Bardzo polecam usługi Karoliny i jej ekipy - solidni fachowcy, którzy przestrzegają terminów."
              </p>
              <p className="mt-4 font-semibold">Szymon K.</p>
              <p className="text-sm text-gray-500">Opinia z Google</p>
            </div>
          </div>
          <a
            href="https://g.page/r/"
            target="_blank"
            className="inline-block mt-16 bg-pink-rose text-white px-10 py-4 rounded-full hover:opacity-90 text-lg md:text-xl"
          >
            Zobacz więcej opinii w Google
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Najczęściej zadawane pytania</h2>
          <div className="space-y-10 text-lg md:text-xl">
            <div>
              <h3 className="font-semibold text-lg md:text-xl">Ile kosztuje odbiór techniczny mieszkania?</h3>
              <p className="text-gray-600 mt-2">Cena zależy od wielkości lokalu, zakresu kontroli i lokalizacji.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">Czy warto zrobić odbiór mieszkania z inżynierem?</h3>
              <p className="text-gray-600 mt-2">Doświadczony inżynier wykryje wady i usterki, które trudno zauważyć samodzielnie.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">Czy wykonujecie wykończenia wnętrz?</h3>
              <p className="text-gray-600 mt-2">Tak, wykonujemy pełne wykończenia pod klucz oraz remonty łazienek i kuchni.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">Jak długo trwa remont mieszkania?</h3>
              <p className="text-gray-600 mt-2">Zależy od zakresu prac i wielkości mieszkania. Standardowe wykończenie dwupokojowego mieszkania trwa ok. 4 tygodnie.</p>
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
          <div className="bg-pink-rose text-white p-6 rounded-full mb-4 text-3xl">{icon}</div>
          <p className="font-semibold text-lg md:text-xl">{title}</p>
        </div>
      </Link>
    </motion.div>
  );
}
