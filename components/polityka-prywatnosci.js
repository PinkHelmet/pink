import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Polityka prywatności i plików cookies</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Informacje ogólne</h2>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
          użytkowników korzystających ze strony internetowej <strong>pinkhelmet.pl</strong>.
        </p>
        <p>
          Administratorem danych osobowych jest <strong>Pink Helmet</strong>.
        </p>
        <p>
          Kontakt z administratorem możliwy jest poprzez adres e-mail podany w zakładce kontakt.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Zakres zbieranych danych</h2>
        <p>Podczas korzystania ze strony mogą być zbierane następujące dane:</p>
        <ul className="list-disc list-inside ml-4">
          <li>adres IP,</li>
          <li>dane przesyłane w formularzu kontaktowym,</li>
          <li>dane techniczne dotyczące przeglądarki i urządzenia użytkownika.</li>
        </ul>
        <p>Dane te wykorzystywane są wyłącznie w celu obsługi zapytań użytkowników oraz poprawy funkcjonowania strony.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Formularz kontaktowy</h2>
        <p>
          W przypadku skorzystania z formularza kontaktowego użytkownik przekazuje dane osobowe dobrowolnie.
          Dane te są wykorzystywane wyłącznie w celu udzielenia odpowiedzi na zapytanie.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Pliki cookies</h2>
        <p>
          Strona internetowa korzysta z plików cookies (tzw. „ciasteczek”). Są to niewielkie pliki tekstowe
          zapisywane na urządzeniu użytkownika.
        </p>
        <p>Pliki cookies wykorzystywane są w celu:</p>
        <ul className="list-disc list-inside ml-4">
          <li>zapewnienia prawidłowego działania strony,</li>
          <li>analizy ruchu na stronie,</li>
          <li>poprawy funkcjonalności serwisu.</li>
        </ul>
        <p>
          Użytkownik może w każdej chwili zmienić ustawienia swojej przeglądarki dotyczące obsługi plików cookies
          lub całkowicie je zablokować.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Rodzaje wykorzystywanych cookies</h2>
        <ul className="list-disc list-inside ml-4">
          <li>cookies sesyjne – usuwane po zamknięciu przeglądarki,</li>
          <li>cookies stałe – przechowywane przez określony czas,</li>
          <li>cookies analityczne – umożliwiają analizę ruchu na stronie.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Zarządzanie cookies</h2>
        <p>
          Użytkownik może samodzielnie zarządzać plikami cookies poprzez ustawienia swojej przeglądarki internetowej.
          Ograniczenie stosowania cookies może wpłynąć na niektóre funkcjonalności strony.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Zmiany polityki prywatności</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności w przypadku zmian
          przepisów prawa lub funkcjonowania strony internetowej.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
