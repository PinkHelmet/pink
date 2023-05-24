import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
import siteMetadata from "../../data/siteMetadata";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <HeadSeo
        title={siteMetadata.title}
        description={`Skontaktuj się z nami: ${siteMetadata.phoneNumber} bądź napisz do nas 
      ${siteMetadata.email}`}
      />
      <HeaderTitle title="Kontakt" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto h-[70vh]"
      >
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center text-2xl">
          <div className="flex flex-col items-center m-6">
            <h1 className="text-4xl mb-4">Masz pytanie? </h1>
            <p>Chcesz skorzystać z oferty ? </p>
            <p>Zapraszam do kontaktu:</p>
            <p>
              tel:{" "}
              <span className="text-pink-rose">{siteMetadata.phoneNumber}</span>
            </p>
            <p>
              email:{" "}
              <span className="text-pink-rose ">{siteMetadata.email}</span>
            </p>
          </div>
          <div className="flex flex-col items-center m-6">
            <h2 className="text-4xl mt-4">Dane firmy:</h2>
            <p className="text-pink-rose font-bold">
              {siteMetadata.companyName}
            </p>
            <p>
              NIP: <span>{siteMetadata.NIP}</span>
            </p>
            <p>
              REGON: <span>{siteMetadata.REGON}</span>
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
