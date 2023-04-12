import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium. `,
      order: "order-1",
    },
    {
      title: "Odbiory techniczne lokali",
      img: technicalImg,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium. `,
      order: "order-2",
    },
    {
      title: "Projektowanie",
      img: projectImg,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium. `,
      order: "order-1",
    },
    {
      title: "Remonty i wykończenia",
      img: renovationImg,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium. `,
      order: "order-2",
    },
    {
      title: "Drenaze",
      img: drainageImg,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium. `,
      order: "order-1",
    },
  ];
  const { ref, inView } = useInView();

  const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: "spring",
  //         duration: 1,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ x: "-100vw" });
  //   }
  //   console.log("useefect hook", inView);
  // }, [inView]);

  return (
    <>
      <HeadSeo title={`Pink Helmet - oferta`} description={`opis opis`} />{" "}
      <HeaderTitle title="Oferta" />
      <section className="container min-h-screen flex flex-col md:flex-row mx-auto min-h-screen w-full flex-wrap">
        {dataOffer.map((offer) => (
          <>
            <div
              ref={ref}
              className="w-full md:max-h-[50vh] flex flex-col md:flex-row items-center justify-center  gap-10 my-6"
            >
              <motion.div
                // animate={animation}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: 0.6,
                }}
                className={`w-full md:w-1/2 md:${offer.order} h-auto md:rounded-lg overflow-hidden`}
              >
                <Image src={offer.img} height={"100%"} className="" />
              </motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: 0.6,
                }}
                className="w-full md:w-1/2 h-auto"
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
