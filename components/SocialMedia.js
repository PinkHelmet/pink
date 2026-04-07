import React from "react";
import siteMetadata from "../data/siteMetadata";
import { FacebookOutlined, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

const SocialMedia = () => {
  const { facebook, instagram, youtube, linkedin, linkedin_SP, maps, maps_SP } = siteMetadata;

  return (
    <div className="flex justify-center md:justify-start items-center gap-6 mt-4">
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FacebookOutlined className="text-white hover:text-[#1877f2] transition-colors duration-200" fontSize="large" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="text-white hover:text-pink-500 transition-colors duration-200" fontSize="large" />
        </a>
      )}
      {youtube && (
        <a href={youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <YouTube className="text-white hover:text-red-600 transition-colors duration-200" fontSize="large" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedIn className="text-white hover:text-blue-500 transition-colors duration-200" fontSize="large" />
        </a>
      )}
      {linkedin_SP && (
        <a href={linkedin_SP} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn SP">
          <LinkedIn className="text-white hover:text-blue-500 transition-colors duration-200" fontSize="large" />
        </a>
      )}
      {maps && (
        <a href={maps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
          <span className="text-white hover:text-red-500 transition-colors duration-200 font-bold text-xl">G</span>
        </a>
      )}
      {maps_SP && (
        <a href={maps_SP} target="_blank" rel="noopener noreferrer" aria-label="Google Maps SP">
          <span className="text-white hover:text-red-500 transition-colors duration-200 font-bold text-xl">G</span>
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
