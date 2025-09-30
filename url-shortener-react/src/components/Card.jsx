import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex flex-col px-6 py-8 gap-4 rounded-lg hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50 transition-all duration-300 group"
    >
      <h1 className="text-white text-xl font-bold group-hover:text-gray-200 transition-colors">
        {title}
      </h1>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default Card;