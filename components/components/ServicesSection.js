import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Key, FormatPaintOutlined, PowerOutlined, CameraIndoorOutlined } from "@mui/icons-material";

export default function ServicesSection() {
  const services = [
    {
      title: "Kierownik budowy i opinie techniczne",
      icon: <FontAwesomeIcon icon={faHandshake} />,
      href: "https://example.com//kierownik-budowy-i-opinie-techniczne-piaseczno",
    },
    {
      title: "Odbiory techniczne lokali",
      icon: <Key />,
      href: "/offer/odbiory-techniczne-lokali-piaseczno",
    },
    {
      title: "Projektowanie wnętrz",
      icon: <FontAwesomeIcon icon={faPenToSquare} />,
      href: "/offer/projektowanie-wnetrz-piaseczno",
    },
    {
      title: "Remonty i wykończenia",
      icon: <FormatPaintOutlined />,
      href: "/offer/remonty-i-wykonczenia-wnetrz-piaseczno",
    },
    {
      title: "Świadectwa energetyczne",
      icon: <PowerOutlined />,
      href: "/offer/swiadectwa-charakterystyki-energetycznej-piaseczno",
    },
    {
      title: "Badania kamerą termowizyjną",
      icon: <CameraIndoorOutlined />,
      href: "/offer/badania-kamera-termowizyjna-piaseczno",
    },
  ];

  return (
    <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 px-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
        >
          <Link href={service.href} className="w-full">
            <div className="bg-pink-rose text-white p-6 rounded-full mb-4 text-2xl inline-flex justify-center">
              {service.icon}
            </div>
            <p className="font-semibold text-lg md:text-xl">{service.title}</p>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
