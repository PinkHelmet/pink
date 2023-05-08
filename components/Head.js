import Head from "next/head";
import React from "react";

const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="UFT-8" />
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={canonicalUrl} />{" "}
        <link rel="favicon" href="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:description" content={description} />
        {children}
      </Head>
    </div>
  );
};

export default HeadSeo;
