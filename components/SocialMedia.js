import React from "react";
import siteMetadata from "../data/siteMetadata";
import { FacebookOutlined, Instagram, YouTube, LinkedIn, Google } from "@mui/icons-material";

const SocialMedia = () => {
  const { facebook, instagram, youtube, linkedin, linkedin_SP, maps, maps_SP } =
    siteMetadata;

  return (
    <div className="w-full text-center my-6">
      <p className="p-2 font-semibold">Social media</p>
      <div className="flex justify-center flex-wrap gap-4">
        {facebook && (
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#1877f2] transition duration-150 ease-in-out"
            aria-label="Zobacz więcej o mojej firmie na Facebooku"
          >
            <FacebookOutlined fontSize="large" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition duration-150 ease-in-out"
            aria-label="Zobacz mój profil na Instagramie"
          >
            <Instagram fontSize="large" />
          </a>
        )}
        {youtube && (
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 transition duration-150 ease-in-out"
            aria-label="Odwiedź mojego YouTube i dowiedz się więcej o mnie"
          >
            <YouTube fontSize="large" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition duration-150 ease-in-out"
            aria-label="Sprawdź linkedin firmy Pink Helmet Karolina Szuba"
          >
            <LinkedIn fontSize="large" />
          </a>
        )}
        {linkedin_SP && (
          <a
            href={linkedin_SP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition duration-150 ease-in-out"
            aria-label="Sprawdź linkedin firmy Pink Helmet SP z o.o."
          >
            <LinkedIn fontSize="large" />
          </a>
        )}
        {maps && (
          <a
            href={maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-500 transition duration-150 ease-in-out"
            aria-label="Sprawdź jak dojechać do firmy Pink Helmet Karolina Szuba"
          >
            <Google fontSize="large" />
          </a>
        )}
        {maps_SP && (
          <a
            href={maps_SP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-500 transition duration-150 ease-in-out"
            aria-label="Sprawdź jak dojechać do firmy Pink Helmet SP z o.o."
          >
            <Google fontSize="large" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
