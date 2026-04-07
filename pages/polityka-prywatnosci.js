import React from "react";
import Link from "next/link";

const PolitykaPrywatnosci = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Polityka prywatności</h1>
      <p className="mb-4">
        Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych użytkowników strony Pink Helmet.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Jakie dane zbieramy?</h2>
      <p className="mb-4">
        Zbieramy dane podane dobrowolnie przez użytkownika np. w formularzu kontaktowym, a także dane techniczne związane z korzystaniem ze strony.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Cel przetwarzania danych</h2>
      <p className="mb-4">
        Dane służą do kontaktu z użytkownikiem, świadczenia usług, realizacji zamówień oraz analizy ruchu na stronie.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Pliki cookies</h2>
      <p className="mb-4">
        Nasza strona wykorzystuje pliki cookies. Szczegóły znajdziesz w <Link href="/polityka-cookies"><a className="underline text-pink-rose">polityce cookies</a></Link>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
      <p className="mb-4">
        W razie pytań dotyczących polityki prywatności prosimy o kontakt pod adresem email: <a href="mailto:biuro@pinkhelmet.pl" className="underline text-pink-rose">biuro@pinkhelmet.pl</a>.
      </p>
    </div>
  );
};

export default PolitykaPrywatnosci;
