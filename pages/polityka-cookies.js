import React from "react";
import Link from "next/link";

const PolitykaCookies = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Polityka cookies</h1>

      <p className="mb-4">
        Nasza strona internetowa używa plików cookies w celu zapewnienia najlepszej jakości usług, analizy ruchu oraz poprawy komfortu użytkowników.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Czym są pliki cookies?</h2>
      <p className="mb-4">
        Cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas korzystania ze strony. Pozwalają one m.in. na poprawne działanie serwisu, zapamiętanie preferencji oraz gromadzenie anonimowych statystyk.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Cele stosowania cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Zapewnienie prawidłowego działania strony.</li>
        <li>Zapamiętanie preferencji użytkownika.</li>
        <li>Analiza ruchu na stronie (statystyki, Google Analytics itp.).</li>
        <li>Wyświetlanie spersonalizowanych treści i reklam.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Rodzaje cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Niezbędne:</strong> wymagane do działania strony.</li>
        <li><strong>Funkcjonalne:</strong> zapamiętują ustawienia użytkownika.</li>
        <li><strong>Analityczne:</strong> pomagają analizować ruch i zachowanie użytkowników.</li>
        <li><strong>Reklamowe:</strong> umożliwiają wyświetlanie spersonalizowanych reklam.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Zarządzanie cookies</h2>
      <p className="mb-4">
        Możesz w każdej chwili zarządzać plikami cookies poprzez ustawienia swojej przeglądarki. Możesz je usuwać lub blokować, jednak niektóre funkcje strony mogą działać nieprawidłowo.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Akceptacja cookies</h2>
      <p className="mb-4">
        Korzystając z naszej strony i klikając przycisk „Akceptuję” w banerze cookies, wyrażasz zgodę na stosowanie plików cookies zgodnie z powyższą polityką.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Polityka prywatności</h2>
      <p className="mb-4">
        Szczegółowe informacje o przetwarzaniu danych osobowych znajdują się w naszej{" "}
        <Link href="/polityka-prywatnosci">
          <a className="underline text-pink-rose">Polityce prywatności</a>
        </Link>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
      <p>
        W razie pytań dotyczących cookies prosimy o kontakt pod adresem email:{" "}
        <a href="mailto:biuro@pinkhelmet.pl" className="underline text-pink-rose">
          biuro@pinkhelmet.pl
        </a>.
      </p>
    </div>
  );
};

export default PolitykaCookies;
