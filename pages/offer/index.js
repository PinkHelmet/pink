import Image from "next/image";
//components
import HeadSeo from "../../components/Head";
//img
import adviceImg from "../../public/advice.jpg";
import technicalImg from "../../public/technial.jpg";
import projectImg from "../../public/project.jpg";
import renovationImg from "../../public/renovation.jpg";
import drainageImg from "../../public/drainage.jpg";

export default function Offer() {
  return (
    <>
      <HeadSeo title={`Pink Helmet - oferta`} description={`opis opis`} />
      <h1 className="flex items-center justify-center mx-auto my-6 w-full">
        Oferta
      </h1>
      <section className="container min-h-screen flex flex-col md:flex-row mx-auto min-h-screen w-full flex-wrap">
        <div className="w-full md:max-h-[50vh] flex flex-col md:flex-row items-center justify-center overflow-hidden gap-10 my-6">
          <div className="w-1/2 h-full rounded-lg overflow-hidden ">
            <Image src={adviceImg} height={"100%"} className="" />
          </div>
          <div className="w-1/2 h-full">
            <h2 className="p-4 flex justify-center text-xl">
              Doradztwo inzynieryjne
            </h2>
            <p className="p-4 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium.
            </p>
          </div>
        </div>
        <div className="w-full shadow border-b"></div>
        <div className="w-full md:max-h-[50vh] flex flex-col md:flex-row items-center justify-center overflow-hidden gap-10 my-6">
          <div className="w-1/2 md:order-2 h-full rounded-lg overflow-hidden ">
            <Image src={technicalImg} height={"100%"} />
          </div>
          <div className="w-1/2 h-full">
            <h2 className="p-4 flex justify-center text-xl">
              Odbiory techniczne lokali
            </h2>
            <p className="p-4 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium.
            </p>
          </div>
        </div>
        <div className="w-full shadow border-b"></div>
        <div className="w-full md:max-h-[50vh] flex flex-col md:flex-row items-center justify-center overflow-hidden gap-10 my-6">
          <div className="w-1/2 h-full rounded-lg overflow-hidden ">
            <Image src={projectImg} height={"100%"} className="" />
          </div>
          <div className="w-1/2 h-full">
            <h2 className="p-4 flex justify-center text-xl">Projektowanie</h2>
            <p className="p-4 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium.
            </p>
          </div>
        </div>
        <div className="w-full shadow border-b"></div>
        <div className="w-full md:max-h-[50vh] flex flex-col md:flex-row items-center justify-center overflow-hidden gap-10 my-6">
          <div className="w-1/2 h-full rounded-lg overflow-hidden md:order-2 ">
            <Image src={renovationImg} height={"100%"} />
          </div>
          <div className="w-1/2 h-full">
            <h2 className="p-4 flex justify-center text-xl">
              Remonty i wykończenia
            </h2>
            <p className="p-4 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium.
            </p>
          </div>
        </div>
        <div className="w-full shadow border-b"></div>
        <div className="w-full md:max-h-[50vh] flex flex-col md:flex-row items-center justify-center overflow-hidden gap-10 my-6">
          <div className="w-1/2 h-full rounded-lg overflow-hidden ">
            <Image src={drainageImg} height={"100%"} className="" />
          </div>
          <div className="w-1/2 h-full">
            <h2 className="p-4 flex justify-center text-xl">Drenaze</h2>
            <p className="p-4 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus, velit a ultrices elementum, quam nisl
              ullamcorper nulla, vel fringilla urna dolor ut libero.
              Pellentesque eget placerat ex. Morbi a tellus est. Proin consequat
              metus elit, vitae pretium risus malesuada quis. Vestibulum
              interdum efficitur enim vel vestibulum. Ut sodales vehicula ante,
              et ultrices nibh vestibulum ut. Nunc feugiat diam non massa
              volutpat efficitur. Cras ac quam sapien. Sed sed lectus sit amet
              mi fringilla fringilla non sagittis ante. In eget ipsum ac risus
              varius vehicula vel id purus. Etiam commodo molestie purus ut
              pretium.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
