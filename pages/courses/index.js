import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
//meta
import siteMetadata from "../../data/siteMetadata";
//img
import boats from "../../public/boats.webp";
import houses from "../../public/houses.webp";

export default function Home(props) {
  return (
    <>
      <HeadSeo
        title={siteMetadata.titleCourses}
        description={`Pink Helmet prowadzi szkolenia z zakresu zarządzania przedsiębiorstwami w
                tym przede wszystkim zarządzania kapitałem ludzkim oraz z
                zakresu rękojmi nieruchomości i obsługi posprzedażowej Nabywców
                nieruchomości od Dewelopera.`}
      />
      <HeaderTitle title="Szkolenia" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container flex flex-col mx-auto min-h-screen w-full"
      >
        <>
          <div className="container mx-auto w-full min-h-fit">
            <div className="flex p-6">
              <p className="text-justify">
                <strong className="text-pink-rose">Pink Helmet </strong>
                prowadzi szkolenia z zakresu zarządzania przedsiębiorstwami w
                tym przede wszystkim zarządzania kapitałem ludzkim oraz z
                zakresu rękojmi nieruchomości i obsługi posprzedażowej Nabywców
                nieruchomości od Dewelopera.
              </p>
            </div>
            <div className="flex flex-col mx-auto w-full container md:flex-row my-6">
              <div className="w-full md:w-1/2 m-2 overflow-hidden relative bg-blend-darken">
                <Link href="/courses/menager">
                  <Image
                    src={boats}
                    className={`hover:scale-110 transition transition-500 brightness-75 `}
                    alt="Szkolenia menedżerskie z zarządzania"
                  />
                  <p className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-4xl text-center text-white drop-shadow ">
                    Szkolenia menedżerskie z zarządzania
                  </p>
                </Link>
              </div>
              <div className="w-full md:w-1/2 m-2 overflow-hidden relative ">
                <Link href="/courses/local">
                  <Image
                    src={houses}
                    className={`hover:scale-110 transition transition-500 brightness-75 `}
                    alt="Szkolenia z zakresu rękojmi nieruchomości"
                  />
                  <p className="absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 text-4xl text-center text-white drop-shadow">
                    Szkolenia z zakresu rękojmi nieruchomości
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </>
      </motion.section>
    </>
  );
}
