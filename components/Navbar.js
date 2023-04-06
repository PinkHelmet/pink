import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  const router = useRouter();
  const navlinks = [
    { path: "/", route: "Strona główna" },
    { path: "/about", route: "O firmie" },
    { path: "/offer", route: "Oferta" },
    { path: "/courses", route: "Szkolenia" },
    { path: "/contact", route: "Kontakt" },
  ];

  return (
    <Popover
      className={
        "bg-white shadow-lg mx-auto justify-between flex items-center px-6 py-2 h-30"
      }
    >
      <Image src={logo} alt="Picture of the author" width="150" height="150" />
      {/* <h1 className="display-block font-bold">Pink Helmet</h1> */}

      <div className="grow">
        <div className="hidden sm:flex items-center justify-end gap-2 md:gap-8">
          {navlinks.map((el) => (
            <Link
              href={el.path}
              className={
                router.pathname == el.path
                  ? "transition ease-in-out delay-100 text-rose-600"
                  : "font-sans"
              }
            >
              {el.route}
            </Link>
          ))}
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-gray-500 focus:none">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed z-10 inset-0 bg-black opacity-30" />
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="relative z-10 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width="150"
                  height="150"
                  className="absolute"
                />{" "}
                <div className="mr-2">
                  <Popover.Button className="inline-flex ml-90 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-gray-500 focus:none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="mt-24">
                  <nav className="grid gap-y-8">
                    {navlinks.map((el) => (
                      <Link
                        href={el.path}
                        className={
                          router.pathname == el.path
                            ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 transition ease-in-out delay-100 text-rose-600"
                            : "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                        }
                      >
                        {el.route}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
};

export default Navbar;
