import Header from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
