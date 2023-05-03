import React from "react";
import siteMetadata from "../data/siteMetadata";
import { FacebookOutlined } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="bg-no-repeat bg-footer_bg bg-cover bg-center bg-fixed shadow-lg">
      <div className="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
        <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center text-white">
          <div className="w-1/2 text-center m-6">
            <p className="p-4">Social media </p>
            <a
              href={siteMetadata.facebook}
              target="_blank"
              className="hover:transition hover:ease-in-out delay-150
            hover:text-facebook hover:cursor-pointer "
            >
              <FacebookOutlined fontSize="large" />
            </a>
          </div>
          <div className="w-1/2 text-center order-first mt-6 mb-4">
            <p className="p-4">Dane Kontaktowe</p>
            <p className="p-2">
              <span className="font-regular">tel:</span>{" "}
              <span className="text-xl font-bold">
                {siteMetadata.phoneNumber}
              </span>
            </p>
            <p className="p-2">
              <span className="font-regular">email: </span>
              <span className="text-xl font-bold">
                {siteMetadata.email}
              </span>{" "}
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
    </div>
  );
};

export default Footer;
