import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
import SocialMedia from "../../components/SocialMedia";
import siteMetadata from "../../data/siteMetadata";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    companyName,
    companyName_SP,
    city,
    NIP,
    NIP_SP,
    REGON,
    REGON_SP,
    KRS,
    email,
    titleContact,
    phoneNumber,
  } = siteMetadata;

  return (
    <>
      <HeadSeo
        title={titleContact}
        description={`Skontaktuj się z nami: ${phoneNumber} lub napisz do nas 
      ${email}`}
      />
      <HeaderTitle title="Kontakt" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row w-full justify-center items-center text-2xl">
          <div className="flex flex-col items-center m-6">
            <p>
              tel: <span className="text-pink-rose">{phoneNumber}</span>
            </p>
            <p>
              email: <span className="text-pink-rose ">{email}</span>
            </p>
            <SocialMedia />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:flex-row mb-10">
          <div className="w-full md:w-1/2 flex flex-col items-center text-2xl">
            <p>{companyName}</p>
            <p>{city}</p>
            <p>NIP: {NIP}</p>
            <p>REGON: {REGON}</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col  items-center text-2xl">
          <p>{companyName_SP}</p>
            <p>{city}</p>
            <p>KRS: {KRS}</p>
            <p>NIP: {NIP_SP}</p>
            <p>REGON: {REGON_SP}</p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
