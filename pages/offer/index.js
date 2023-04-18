import Image from "next/image";
import { motion } from "framer-motion";
//components
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";
//img
import adviceImg from "../../public/advice.jpg";
import technicalImg from "../../public/technial.jpg";
import projectImg from "../../public/project.jpg";
import renovationImg from "../../public/renovation.jpg";
import drainageImg from "../../public/drainage.jpg";

export default function Offer() {
  const dataOffer = [
    {
      title: "Doradztwo inzynieryjne",
      img: adviceImg,
      content: `W Twoim domu pojawia się grzyb? A może wychodzi przeciek na ścianach? Świetnie trafiłeś.
      Przez kilka lat mojej kariery budowlanej widziałam już wiele wad w budynkach mieszkalnych.
      Sprawdzę źródło problemu oraz zaproponuję rozwiązanie.
      A może potrzebujesz wsparcia merytorycznego w zakresie kupna domu od Dewelopera?
      Podpowiem Ci na co zwrócić uwagę, sprawdzę zapisy umowy, podpowiem jak uzyskać od
      Dewelopera to co Ci się należy. `,
      order: "md:order-first",
    },
    {
      title: "Odbiory techniczne lokali",
      img: technicalImg,
      content: `Nie przejmuj się jeżeli nie wiesz na co zwrócić uwagę podczas odbioru swojego mieszkania od
      Dewelopera – od tego jestem ja. Sprawdzę geometrię ścian, wylewek, stolarkę okienną i
      drzwiową, poprawność wykonania instalacji, wykonanie prac w odniesieniu do projektu i nie
      tylko. Ty w tym czasie będziesz mógł/mogła skupić się na radości odbioru Twojego nowego
      lokalu `,
      order: "md:order-last",
    },
    {
      title: "Projektowanie",
      img: projectImg,
      content: `Projektowanie aranżacji wnętrz, mebli, systemów drenażowych. Wszystko to czego
      potrzebujesz w swoim mieszkaniu do tego niepowtarzalne i skrojone na Twoje potrzeby. `,
      order: "md:order-first",
    },
    {
      title: "Remonty i wykończenia",
      img: renovationImg,
      content: `Malowanie, ścianki dekoracyjne, lamele, wymiana sylikonów, listwy przypodłogowe.. aż po
      remonty i wykończenia całych mieszkań. `,
      order: "md:order-last",
    },
    {
      title: "Drenaze",
      img: drainageImg,
      content: `Zakupiłeś piękny dom ale na mało przepuszczalnym gruncie w skutek czego po większych
      opadach Twój ogródek zamienia się w spełnienie marzeń Shreka? A może chcesz
      magazynować wody opadowe do podlewania roślin w ogrodzie i tym samym zmniejszyć koszty
      zużycia wody? Świetnie trafiłeś!`,
      order: "md:order-first",
    },
  ];

  return (
    <>
      <HeadSeo title={`Pink Helmet - oferta`} description={`opis opis`} />{" "}
      <HeaderTitle title="Oferta" />
      <section className="container min-h-screen flex flex-col md:flex-row mx-auto min-h-screen w-full flex-wrap">
        {dataOffer.map((offer) => (
          <>
            <div className="w-full flex flex-col md:flex-row items-center justify-center  gap-10 my-6">
              <motion.div
                // animate={animation}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.1,
                  delay: 0.6,
                }}
                className={`w-full md:w-1/2 ${offer.order} h-auto md:rounded-lg overflow-hidden`}
              >
                <Image src={offer.img} height={"100%"} className="" />
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: 0.8,
                }}
                className={`w-full md:w-1/2 h-auto `}
              >
                <h2 className="p-4 flex justify-center text-xl">
                  {offer.title}
                </h2>
                <p className="px-4 font-extralight">{offer.content}</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.6,
              }}
              className="last:hidden w-full shadow border-b"
            ></motion.div>
          </>
        ))}
      </section>
    </>
  );
}
