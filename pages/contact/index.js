import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";

import { motion } from "framer-motion";

export default function Contact() {
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
          <p>Masz pytanie? </p>
          <p>Chcesz skorzystać z oferty ? </p>
          <p>Zapraszam do kontaktu:</p>
          <p>
            tel: <span className="text-pink-rose">516 289 995</span>
          </p>
          <p>
            email: <span className="text-pink-rose">biuro@pinkhelmet.pl</span>
          </p>
        </div>
      </motion.section>
    </>
  );
}
