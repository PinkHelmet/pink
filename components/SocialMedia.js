import React from "react";
import siteMetadata from "../data/siteMetadata";
import { FacebookOutlined, Instagram, YouTube, LinkedIn, Google } from "@mui/icons-material";

const SocialMedia = () => {
  const { facebook, instagram, youtube, linkedin, linkedin_SP, maps, maps_SP } =
    siteMetadata;

  return (
    <div className="w-full  text-center m-6">
      <p className="p-4">Social media </p>
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-facebook hover:cursor-pointer px-4"
        aria-label="Zobacz więcej o mojej firmie na Facebooku"
      >
        <FacebookOutlined fontSize="large" />
      </a>
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-instagram hover:cursor-pointer px-4"
        aria-label="Zobacz mój profil na Instagramie"
      >
        <Instagram fontSize="large" />
      </a>
      <a
        href={youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-youtube hover:cursor-pointer px-4"
        aria-label="Odwiedź mojego youtuba i dowiedź się więcej o mnie "
      >
        <YouTube fontSize="large" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-linkedin hover:cursor-pointer px-4"
        aria-label="Sprawdź linkedin firmy Pink Helmet Karolina Szuba"
      >
        <LinkedIn fontSize="large" />
      </a>
      <a
        href={linkedin_SP}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-linkedin hover:cursor-pointer px-4"
        aria-label="Sprawdź linkedin firmy Pink Helmet SP z o.o."
      >
        <LinkedIn fontSize="large" />
      </a>
      <a
        href={maps}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-google hover:cursor-pointer px-4"
        aria-label="Sprawdź jak dojechać do firmy Pink Helmet Karolina Szuba"
      >
        <Google fontSize="large" />
      </a>
      <a
        href={maps_SP}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transition hover:ease-in-out delay-150 hover:text-google hover:cursor-pointer px-4"
        aria-label="Sprawdź jak dojechać do firmy Pink Helmet SP z o.o."
      >
        <Google fontSize="large" />
      </a>
    </div>
  );
};

export default SocialMedia;
