import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
import Gallery from "../../components/Gallery";
import { motion } from "framer-motion";

export default function Realisation() {
  let images = ["/boats.jpg", "/houses.jpg"];
  return (
    <>
      <HeadSeo title={`Pink Helmet - kontakt`} description={`opis opis`} />
      <HeaderTitle title="Kontakt" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto h-[70vh]"
      >
        <div className="flex flex-col w-full h-full justify-center items-center text-2xl">
          <Gallery images={images} />
        </div>
      </motion.section>
    </>
  );
}
