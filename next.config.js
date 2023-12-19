/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.datocms-assets.com"],
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
};

module.exports = nextConfig;
