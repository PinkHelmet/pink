import { Image } from "next/image";
import Navbar from "../components/Navbar";
import { Popover } from "@headlessui/react";
import Link from "next/link";

export default function Home(props) {
  return (
    <Popover className="bg-fixed bg-blend-overlay bg-no-repeat bg-hero_bg bg-cover bg-center h-[90vh]">
      <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        {" "}
        <div className="flex flex-col h-[10vh] justify-between items-center">
          <h2 className="text-white font-bold text-xl">
            Zapraszamy do zapoznania się z naszą ofertą!
          </h2>

          <button class="bg-rose-100 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[200px]">
            <Link href="/offer">Tutaj!</Link>
          </button>
        </div>
      </div>
    </Popover>
  );
}
