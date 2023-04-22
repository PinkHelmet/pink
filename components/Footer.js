import React from "react";
import { Link } from "next/link";
import { footerImg } from "../public/footer-bg.jpg";
import { FacebookOutlined } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="bg-no-repeat bg-[url('../public/footer-bg.jpg')] bg-cover bg-center bg-fixed shadow-lg h-60">
      <div class="w-full h-full flex relative justify-center items-center backdrop-brightness-50">
        <div className="container mx-auto h-full flex text-white">
          <div className="w-1/2 text-center m-6">
            <p className="p-6">Social media </p>

            <FacebookOutlined
              fontSize="large"
              className="hover:transition hover:ease-in-out delay-150 hover:text-facebook hover:cursor-pointer "
            >
              <a href="https://www.facebook.com"></a>
            </FacebookOutlined>
          </div>
          <div className="w-1/2 text-center m-6">
            <p className="p-6">Dane Kontaktowe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
