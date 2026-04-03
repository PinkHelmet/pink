import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeadSeo from "../components/Head";
import siteMetadata from "../data/siteMetadata";

import {
  CameraIndoorOutlined,
  KeyboardDoubleArrowDown,
  Key,
  FormatPaintOutlined,
  PowerOutlined,
} from "@mui/icons-material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const refServices = useRef(null);
  const refWhy = useRef(null);
  const refReviews = useRef(null);
  const refFAQ = useRef(null);

  const isInViewServices = useInView(refServices, { once: true });
  const isInViewWhy = useInView(refWhy, { once: true });
  const isInViewReviews = useInView(refReviews, { once: true });
  const isInViewFAQ = useInView(refFAQ, { once: true });

  const { titleHome } = siteMetadata;

  return (
    <>
      {/* Ukryty H1 dla SEO */}
      <h1 className="hidden">
        Odbiory techniczne mieszkań i domów od deweloperów, badania kamerą termowizyjną,
        kierownik budowy, remonty i wykończenia wnętrz - Piaseczno i okolice Pink Helmet
      </h1>

      <HeadSeo
        title={titleHome}
        description="Kompleksowe usługi budowlane: odbiory techniczne mieszkań, kierownik budowy, świadectwa energetyczne, badania kamerą termowizyjną, remonty i wykończenia wnętrz."
      />

      {/* Hero sekcja */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-mobile_hero_bg md:bg-hero_bg bg-cover bg-center h-[90vh] shadow-lg"
      >
        <div className="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
          <div className="flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
              Kompleksowe usługi z zakresu budownictwa na terenie Warszawy, Piaseczna i okolic
            </h2>
            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white drop-shadow-lg font-bold py-2 px-6 rounded-full duration-100">
              <Link href="/offer">Tutaj!</Link>
            </button>
          </div>
          <div className="absolute text-white text-6xl bottom-16 bounce">
            <KeyboardDoubleArrowDown />
          </div>
        </div>
      </motion.div>

      {/* Sekcja usług */}
      <section
        ref={refServices}
        style={{
          transform: isInViewServices ? "none" : "translateY(50px)",
          opacity: isInViewServices ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17,0.55,0.55,1) 0.3s",
        }}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 px-4"
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
      </section>

      {/* Dlaczego Pink Helmet */}
      <section
        ref={refWhy}
        style={{
          transform: isInViewWhy ? "none" : "translateY(50px)",
          opacity: isInViewWhy ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17,0.55,0.55,1) 0.3s",
        }}
        className="bg-white py-20"
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg">
            Dlaczego Pink Helmet to dobry wybór?
          </h2>
          <div className="text-xl md:text-2xl font-normal space-y-6 text-left max-w-xl mx-auto">
            <p>✓ Kompleksowe usługi budowlane w jednym miejscu</p>
            <p>✓ Wysoka jakość prac i obsługi klienta</p>
            <p>✓ Dotrzymywanie uzgodnionych terminów</p>
            <p>✓ Porządek i czystość podczas prac</p>
          </div>
        </div>
      </section>

      {/* Sekcja opinii */}
      <section
        ref={refReviews}
        style={{
          transform: isInViewReviews ? "none" : "translateY(50px)",
          opacity: isInViewReviews ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17,0.55,0.55,1) 0.3s",
        }}
        className="bg-gray-100 py-20"
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Opinie naszych klientów</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-6">
            <ReviewCard
              stars={5}
              text="Pani Karolina to prawdziwa profesjonalistka w dziedzinie technicznej..."
              author="Konrad K."
            />
            <ReviewCard
              stars={5}
              text="Profesjonalna obsługa, Pani Karolina normy ma w małym paluszku..."
              author="Damian G."
            />
            <ReviewCard
              stars={5}
              text="Bardzo polecam usługi Karoliny i jej ekipy - solidni fachowcy..."
              author="Szymon K."
            />
          </div>
          <a
            href="https://g.page/r/CfBqg1R51u2LEAE/review"
            target="_blank"
            className="inline-block mt-12 bg-pink-rose text-white px-8 py-3 rounded-full hover:opacity-90"
          >
            Zobacz więcej opinii w Google
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section
        ref={refFAQ}
        style={{
          transform: isInViewFAQ ? "none" : "translateY(50px)",
          opacity: isInViewFAQ ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17,0.55,0.55,1) 0.3s",
        }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <FAQItem
            question="Ile kosztuje odbiór techniczny mieszkania?"
            answer="Cena odbioru technicznego mieszkania zależy od wielkości lokalu, zakresu kontroli 
            (badanie kamerą termowizyjną przegród lub instalacji ogrzewania podłogowego) oraz lokalizacji. 
            Skontaktuj się z nami aby otrzymać dokładną wycenę."
          />
          <FAQItem
            question="Czy warto zrobić odbiór mieszkania z inżynierem?"
            answer="Odbiór mieszkania z doświadczonym inżynierem pozwala wykryć wady wykonawcze i usterki które trudno zauważyć bez specjalistycznej wiedzy. 
            Wady te mogą być bardzo kosztowne lub problematyczne. W przypadku inwestycji rzędu setek tysięcy a nwet milionów jest to swego rodzaju "must have"."
          />
          <FAQItem
            question="Ile kosztuje wykończenie mieszkania pod klucz?"
            answer="Koszt wykończenia zależy od standardu materiałów, zakresu prac oraz metrażu mieszkania. Chcesz wiedzieć więcej? Napisz lub zadzwoń."
          />
          <FAQItem
            question="Jak długo trwa remont mieszkania?"
            answer="Czas trwania remontu zależy od zakresu prac oraz wielkości mieszkania. Standardowe wykończenie dwupokojowego mieszkania trwa około czterech tygodni. 
            Zawsze staramy się ustalać realistyczny harmonogram prac i dotrzymywać uzgodnionych terminów. Klienci doceniają naszą terminowość." 
          />
          <FAQItem
            question="Jakie problemy można wykryć dzięki badaniu termowizyjnemu?"
            answer="Termowizja pozwala znaleźć m.in.: mostki termiczne czyli miejsca gdzie zachodzą wzmożone straty ciepła, wilgoć i wycieki w instalacjach, nieszczelności izolacji 
            oraz nieprawidłowości w systemach grzewczych lub wentylacyjnych. Badanie przegród (ściany, dach, stropy, okna) należy wykonywać w okresie zimowym, gdyż 
            takie warunki są idealne do badania strat ciepła w budynku. 
          />
          <FAQItem
            question="Kiedy warto wykonać badanie termowizyjne budynku?
            answer="Badanie warto przeprowadzić np. przed odbiorem nowego domu, przy podejrzeniu 
            strat ciepła, wilgoci lub usterkach instalacji — szczególnie gdy standardowa wizualna kontrola ich nie wykrywa."
           />
        </div>
      </section>
    </>
  );
}

// Komponenty podrzędne
function ServiceCard({ href, icon, title }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link href={href}>
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
          <div className="bg-pink-rose text-white p-6 rounded-full mb-4 text-2xl">
            {icon}
          </div>
          <p className="font-semibold text-lg md:text-xl">{title}</p>
        </div>
      </Link>
    </motion.div>
  );
}

function ReviewCard({ stars, text, author }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <p className="text-yellow-500 text-xl mb-3">{'★'.repeat(stars)}</p>
      <p className="italic">{text}</p>
      <p className="mt-4 font-semibold">{author}</p>
      <p className="text-sm text-gray-500">Opinia z Google</p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg">{question}</h3>
      <p className="text-gray-600 mt-2">{answer}</p>
    </div>
  );
}
