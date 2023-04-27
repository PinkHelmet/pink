import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
//img
import boats from "../../public/boats.jpg";
import houses from "../../public/houses.jpg";

export default function Home(props) {
  return (
    <>
      <HeadSeo
        title={`Pink Helmet - szkolenia`}
        description={`Strona z wyborem szkolen menadzerski lub szkolenia z zakresu rękojmi nieruchomości`}
      />
      <HeaderTitle title="Szkolenia" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container min-h-screen flex flex-col mx-auto min-h-screen w-full"
      >
        <>
          <div className="container mx-auto w-full min-h-fit">
            <div className="flex p-6">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in venenatis ligula, non mattis sapien. Aenean tortor eros,
                tincidunt sed ligula eu, fermentum faucibus magna. Aenean augue
                nisi, ornare a ullamcorper ut, dignissim semper tortor. Integer
                aliquet varius turpis, eu tempus diam dignissim ac. Aliquam
                porttitor nibh neque, ut hendrerit leo venenatis aliquam.
                Vestibulum ut dictum leo. Donec eu arcu in ligula efficitur
                mattis. Maecenas vestibulum, risus vel elementum ornare, felis
                eros maximus velit, in condimentum risus neque dictum arcu.
                Praesent at lorem cursus erat varius pulvinar. In nisl magna,
                feugiat quis scelerisque vitae, pretium nec tellus. Sed eu ante
                nunc.
              </p>
            </div>
            <div className="flex flex-col mx-auto w-full container md:flex-row my-6">
              <div className="w-full md:w-1/2 m-2 overflow-hidden relative bg-blend-darken">
                <Link href="/courses/menager">
                  <Image
                    src={boats}
                    className={`hover:scale-110 transition transition-500 brightness-75 `}
                  />
                  <p className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-4xl text-center text-white drop-shadow">
                    Szkolenia menedżerskie z zarządzania
                  </p>
                </Link>
              </div>
              <div className="w-full md:w-1/2 m-2 overflow-hidden relative ">
                <Link href="/courses/local">
                  <Image
                    src={houses}
                    className={`hover:scale-110 transition transition-500 brightness-75 `}
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
