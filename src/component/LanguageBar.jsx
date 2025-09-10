/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const LanguageBar = ({ name, level }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between">
        <span className="text-sm font-bold italic text-gray-600">{name}</span>
        <span className="text-sm font-bold italic text-gray-600">{level}%</span>
      </div>

      {/* Outer bar with yellow border */}
      <div className="w-full p-1 rounded-full h-4 border border-amber-400">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : "0%" }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-[6px] bg-yellow-400 rounded-l-full"
        />
      </div>
    </div>
  );
};
