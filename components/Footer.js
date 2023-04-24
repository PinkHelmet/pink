import React from "react";
import Link from "next/link";
import { FacebookOutlined } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="bg-no-repeat bg-footer_bg bg-cover bg-center bg-fixed shadow-lg h-60">
      <div className="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
        <div className="container mx-auto h-full flex text-white">
          <div className="w-1/2 text-center m-6">
            <p className="p-4">Social media </p>
            <a
              href="https://www.facebook.com/profile.php?id=100090664581682"
              className="hover:transition hover:ease-in-out delay-150
            hover:text-facebook hover:cursor-pointer "
            >
              <FacebookOutlined fontSize="large" />
            </a>
          </div>
          <div className="w-1/2 text-center mt-6 mb-4">
            <p className="p-4">Dane Kontaktowe</p>
            <p className="p-2">
              <span className="font-thin">tel:</span> 516 289 995
            </p>
            <p className="p-2">
              <span className="font-thin">email:</span> biuro@pinkhelmet.pl
            </p>
            <p className="p-2 max-w-screen-sm">
              <span className="font-thin">lokalizacja działania:</span>{" "}
              Piaseczno, Warszawa i okolice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
