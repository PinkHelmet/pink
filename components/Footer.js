import React from "react";
import siteMetadata from "../data/siteMetadata";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Footer = () => {
  const { phoneNumber, email } = siteMetadata;

  return (
    <footer className="bg-footer_bg bg-cover bg-center bg-fixed shadow-lg text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-4">
        {/* Media społecznościowe */}
        <SocialMedia />

        {/* Dane kontaktowe */}
        <div className="w-full md:w-1/2 text-left mt-6 md:mt-0">
          <p className="text-lg font-semibold mb-2">Dane Kontaktowe:</p>
          
          <p className="mb-2">
            <span className="font-regular">tel:</span>{" "}
            <a
              href={`tel:${phoneNumber}`}
              className="text-xl font-bold text-pink-rose hover:underline"
            >
              {phoneNumber}
            </a>
          </p>

          {/* Przyciski */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-pink-rose text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-200 mb-4"
          >
            Zadzwoń teraz
          </a>

          <p className="mb-2">
            <span className="font-regular">email: </span>
            <a
              href={`mailto:${email}`}
              className="text-xl font-bold text-pink-rose hover:underline"
            >
              {email}
            </a>
          </p>

          <address className="not-italic mb-2">
            <span className="font-regular">Lokalizacja działania:</span>{" "}
            <span className="text-xl font-bold">Piaseczno, Warszawa i okolice</span>
          </address>

          {/* Linki prawne */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/polityka-prywatnosci">
              <a className="underline hover:text-pink-200">Polityka prywatności</a>
            </Link>
            <Link href="/polityka-cookies">
              <a className="underline hover:text-pink-200">Polityka cookies</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Stopka dolna */}
      <div className="container mx-auto text-center py-4 text-sm">
        <span className="inline-block mr-2">Created by</span>
        <a
          href="https://headincode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-pink-200"
        >
          HeadInCode
        </a>
      </div>
    </footer>
  );
};

export default Footer;
