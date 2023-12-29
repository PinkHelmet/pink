import React from "react";
import siteMetadata from "../data/siteMetadata";
import { FacebookOutlined } from "@mui/icons-material";

const Footer = () => {
  const { facebook, phoneNumber, email } = siteMetadata;

  return (
    <div className="bg-footer_bg bg-cover bg-center bg-fixed shadow-lg">
      <div className=" backdrop-brightness-50">
        <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center text-white">
          <div className="w-1/2 text-center m-6">
            <p className="p-4">Social media </p>
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition hover:ease-in-out delay-150 hover:text-facebook hover:cursor-pointer"
              aria-label="Zobacz więcej o mojej firmie na Facebooku"
            >
              <FacebookOutlined fontSize="large" />
            </a>
          </div>{" "}
          <div className="w-1/2 text-center order-first mt-6 mb-4">
            <p className="p-4">Dane Kontaktowe</p>
            <p className="p-2">
              <span className="font-regular">tel:</span>{" "}
              <span className="text-xl font-bold">{phoneNumber}</span>
            </p>
            <p className="p-2">
              <span className="font-regular">email: </span>
              <span className="text-xl font-bold">{email}</span>{" "}
            </p>
            <p className="p-2 max-w-screen-sm">
              <span className="font-regular">lokalizacja działania:</span>{" "}
              <span className="text-xl font-bold">
                Piaseczno, Warszawa i okolice
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white">
        Created by{" "}
        <a
          href="https://headincode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          HeadInCode
        </a>
      </div>
    </div>
  );
};

export default Footer;
