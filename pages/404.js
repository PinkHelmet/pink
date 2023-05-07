import React from "react";
import RedirectButton from "../components/RedirectButton";

import { motion } from "framer-motion";

function CustomError404() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.4 }}
      className="min-h-[70vh] container mx-auto flex w-full flex-col items-center justify-center"
    >
      <div>
        <p>Ooou, coś poszlo nie tak 🧐🧐🧐</p>
      </div>
      <div>
        <RedirectButton href="/" redirectTo="Cofnij do strony głównej" />
      </div>
    </motion.section>
  );
}

export default CustomError404;
