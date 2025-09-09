/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const LanguageBar = ({ name, level }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between ">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}%</span>
      </div>

      {/* Progress bar wrapper with yellow border */}
      <div className="w-full p-1 rounded-full h-4 border border-amber-400">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[6px] bg-yellow-400 rounded-l-full "
        />
      </div>
    </div>
  );
};
