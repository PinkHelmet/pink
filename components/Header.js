import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
  const domain = "https://pinkhelmet.pl";
  
  // Automatyczne generowanie pełnego adresu URL dla Google
  const canonicalUrl = `${domain}${router.asPath === '/' ? '' : router.asPath.split('?')[0]}`;

  return (
    <>
      <Head>
        <title>{props.pageTitle || "Pink Helmet | Odbiory mieszkań i domów"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        {/* To jest kluczowa poprawka dla Google */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div>{props.children}</div>
    </>
  );
};

export default Header;
