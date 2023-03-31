import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <Popover
      className={
        "bg-pink-rose shadow mx-auto justify-between flex items-center px-6 py-2 h-24"
      }
    >
      <div>
        <h1 className="display-block font-bold">Pink Helmet</h1>
      </div>

      <div className="grow">
        <div className="hidden sm:flex items-center justify-end gap-2 md:gap-8">
          <Link
            href="/"
            className={
              router.pathname == "/"
                ? "transition ease-in-out delay-100 text-rose-600"
                : ""
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              router.pathname == "/about"
                ? "transition ease-in-out delay-100 text-rose-600"
                : ""
            }
          >
            About
          </Link>
          <Link
            href="/offer"
            className={
              router.pathname == "/offer"
                ? "transition ease-in-out delay-100 text-rose-600"
                : ""
            }
          >
            Offer
          </Link>
          <Link
            href="/courses"
            className={
              router.pathname == "/courses"
                ? "transition ease-in-out delay-100 text-rose-600"
                : ""
            }
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className={
              router.pathname == "/contact"
                ? "transition ease-in-out delay-100 text-rose-600"
                : ""
            }
          >
            Contact
          </Link>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-pink-rose p-2 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
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
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="relative rounded-lg bg-pink-rose shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <h1 className="absolute top-5 left-5 font-bold">Pink Helmet</h1>
                <div className="mr-2">
                  <Popover.Button className="inline-flex ml-90 items-center justify-center rounded-md bg-pink-rose p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/about"
                    >
                      About
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/offer"
                    >
                      Offer
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/courses"
                    >
                      Courses
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/contact"
                    >
                      Contact
                    </Link>
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
