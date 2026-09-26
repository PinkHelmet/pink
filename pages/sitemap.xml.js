import { request } from "../lib/datocms";

const BASE_URL = "https://pinkhelmet.pl";

function generateSiteMap(posts) {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/realisation",
    "/offer",
    "/offer/kierownik-budowy-i-opinie-techniczne",
    "/offer/odbiory-techniczne-lokali",
    "/offer/swiadectwa-charakterystyki-energetycznej",
    "/offer/badania-kamera-termowizyjna",
    "/offer/projektowanie-wnetrz",
  ];

  const staticUrls = staticPages
    .map(
      (path) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
  </url>`
    )
    .join("");

  const blogUrls = posts
    .map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    ${post.datePublic ? `<lastmod>${post.datePublic}</lastmod>` : ""}
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const query = `
    query SitemapQuery {
      allBlogs {
        slug
        datePublic
      }
    }
  `;

  const data = await request({ query });

  const sitemap = generateSiteMap(data.allBlogs || []);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
