import React, { useEffect, useState } from "react";
import siteMetadata from "../data/siteMetadata";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Footer = () => {
  const { phoneNumber, email } = siteMetadata;
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const acceptCookies = () => {
    setCookie("cookie_consent", "accepted", 365);
    setShowCookieBanner(false);
  };

  return (
    <>
      <footer className="bg-footer_bg bg-cover bg-center bg-fixed shadow-lg text-white">
        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Media społecznościowe */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold mb-2">Media społecznościowe:</p>
              <SocialMedia />
            </div>

            {/* Dane kontaktowe */}
            <div className="flex flex-col">
              <p className="text-lg font-semibold mb-2">Dane kontaktowe:</p>
              <p className="mb-2">
                tel:{" "}
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-pink-rose font-bold hover:underline"
                >
                  {phoneNumber}
                </a>
              </p>
              <p className="mb-2">
                email:{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-pink-rose font-bold hover:underline"
                >
                  {email}
                </a>
              </p>
              <address className="not-italic mb-2">
                Lokalizacja działania: <span className="font-bold">Piaseczno, Warszawa i okolice</span>
              </address>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/polityka-prywatnosci">
                  <a className="underline hover:text-pink-200">Polityka prywatności</a>
                </Link>
                <Link href="/polityka-cookies">
                  <a className="underline hover:text-pink-200">Polityka cookies</a>
                </Link>
              </div>
            </div>

            {/* Przyciski */}
            <div className="flex flex-col items-start md:items-end">
              <p className="text-lg font-semibold mb-2">Szybki kontakt:</p>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-pink-rose text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-200 mb-3"
              >
                Zadzwoń teraz
              </a>
              <a
                href={`mailto:${email}`}
                className="bg-pink-rose text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-200"
              >
                Napisz e-mail
              </a>
            </div>
          </div>

          {/* Stopka dolna */}
          <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
            <span>Created by </span>
            <a
              href="https://headincode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-200"
            >
              HeadInCode
            </a>
          </div>
        </div>
      </footer>

      {/* Baner cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-[#1f1f1f] text-white p-5 z-50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm md:text-base mb-3 md:mb-0 md:max-w-3xl">
              Ta strona wykorzystuje pliki cookies w celu prawidłowego działania
              strony, analizy ruchu oraz poprawy jakości usług. Korzystając ze
              strony wyrażasz zgodę na ich użycie zgodnie z naszą{" "}
              <Link href="/polityka-prywatnosci">
                <a className="text-pink-rose font-bold underline">Polityką prywatności</a>
              </Link>.
            </div>
            <button
              onClick={acceptCookies}
              className="bg-pink-rose text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-200"
            >
              Akceptuję
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
