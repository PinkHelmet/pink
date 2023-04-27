import React from "react";
import { motion } from "framer-motion";

const HeaderTitle = ({ title }) => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.2 }}
      className="inline-flex items-center justify-center w-full mt-8"
    >
      <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="absolute px-3 font-medium text-2xl text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-black ">
        {title}
      </h1>
    </motion.div>
  );
};

export default HeaderTitle;
