import React from "react";
import siteMetadata from "../data/siteMetadata";
import { FacebookOutlined, Instagram, YouTube } from "@mui/icons-material";

const SocialMedia = () => {
  const { facebook, instagram, youtube } = siteMetadata;

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
    </div>
  );
};

export default SocialMedia;
