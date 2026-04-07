import React from "react";
import siteMetadata from "../data/siteMetadata";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Footer = () => {
  const { phoneNumber, email } = siteMetadata;

  return (
    <footer className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">

        {/* Lewa kolumna – Social Media */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Znajdź nas w social media</h2>
          <SocialMedia />
        </div>

        {/* Środkowa kolumna – Dane kontaktowe */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Dane kontaktowe</h2>
          <p className="mb-2">
            tel:{" "}
            <a href={`tel:${phoneNumber}`} className="font-bold text-pink-500 hover:underline">
              {phoneNumber}
            </a>
          </p>
          <p className="mb-2">
            email:{" "}
            <a href={`mailto:${email}`} className="font-bold text-pink-500 hover:underline">
              {email}
            </a>
          </p>
          <address className="not-italic mb-4">
            Lokalizacja działania: <span className="font-bold">Piaseczno, Warszawa i okolice</span>
          </address>
        </div>

        {/* Prawa kolumna – Przyciski i linki prawne */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Szybki kontakt</h2>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-200 mb-4"
          >
            Zadzwoń teraz
          </a>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <Link href="/polityka-prywatnosci">
              <span className="underline hover:text-pink-200 cursor-pointer">Polityka prywatności</span>
            </Link>
            <Link href="/polityka-cookies">
              <span className="underline hover:text-pink-200 cursor-pointer">Polityka cookies</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stopka dolna */}
      <div className="container mx-auto text-center py-4 text-sm border-t border-gray-700 mt-6">
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
