import Layout from "../components/Layout";
import { Alkatra, Lexend } from "next/font/google";
import "../styles/globals.css";

const lexend = Lexend({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={`${lexend.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
