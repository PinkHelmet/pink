import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const HeadSeo = ({
  title,
  description,
  ogTwitterImage,
  ogType,
  children,
}) => {
  const router = useRouter();
  const domain = "https://pinkhelmet.pl";
  
  // Tworzy pełny adres URL, usuwa zbędne pytajniki i parametry
  const canonicalUrl = `${domain}${router.asPath === '/' ? '' : router.asPath.split('?')[0]}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      {description && <meta name="description" content={description} />}
      
      <link rel="canonical" href={canonicalUrl} />
      
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {children}
    </Head>
  );
};

export default HeadSeo;
