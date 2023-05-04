import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Close, ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import Image from "next/image";

function Modal({ open, setOpen, data, image, setImage }) {
  const cancelButtonRef = useRef(null);
  const [pic, setPic] = useState(image);

  const indexImage = data.findIndex((img) => img.id === pic.id);
  console.log(indexImage);
  const handleIncrement = () => {
    setPic(data[indexImage + 1]);
  };
  const handleDecrement = () => {
    setPic(data[indexImage - 1]);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center items-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-transparent text-left transition-all md:my-8 md:mx-12 ">
                <div className="px-4 py-3 max-h-[80vh] overflow-hidden">
                  <div
                    className="absolute -top-4 -right-4 text-white text-2xl cursor-pointer"
                    onClick={() => {
                      setImage(null);
                      setOpen(false);
                    }}
                  >
                    <Close style={{ fontSize: 30 }} />
                  </div>
                  <Image
                    src={`${pic.image.responsiveImage.src}`}
                    width={0}
                    height={0}
                    alt={image.image.responsiveImage.alt}
                    sizes="100vw"
                    // className="max-h-[80vh]"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="bg-white text-center p-2">
                    {pic.image.responsiveImage.title}
                  </p>
                </div>

                <div
                  className={`absolute left-1/3 md:top-1/2 md:-left-10 transform md:-translate-y-1/2  text-white ${
                    indexImage === 0
                      ? "opacity-50 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={handleDecrement}
                >
                  <ArrowBackIos style={{ fontSize: 60 }} />
                </div>
                <div
                  className={`absolute right-1/3 md:top-1/2 md:-right-12 transform md:-translate-y-1/2 text-white ${
                    indexImage === data.length - 1
                      ? "opacity-50 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={handleIncrement}
                >
                  <ArrowForwardIos style={{ fontSize: 60 }} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
