/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Cardsss = ({ title, stack, demo, code, image, type, category }) => {
  const [direction, setDirection] = useState('center');
  const cardRef = useRef(null);

  const getDirection = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const w = bounds.width;
    const h = bounds.height;

    const fromTop = y < h / 4;
    const fromBottom = y > (h * 3) / 4;
    const fromLeft = x < w / 4;
    const fromRight = x > (w * 3) / 4;

    if (fromTop) return 'top';
    if (fromBottom) return 'bottom';
    if (fromLeft) return 'left';
    if (fromRight) return 'right';
    return 'center';
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setDirection(getDirection(e));
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -100, opacity: 0 };
      case 'right':
        return { x: 100, opacity: 0 };
      case 'top':
        return { y: -100, opacity: 0 };
      case 'bottom':
        return { y: 100, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group relative"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Directional Overlay */}
      {isHovered && (
        <motion.div
          initial={getInitialPosition()}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 bg-black/50 px-4 py-6 flex flex-col justify-between text-white z-10"
        >
          {/* Badges */}
          <div className="flex justify-between mb-3">
            {category && (
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                {category}
              </span>
            )}
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                type === 'frontend'
                  ? 'bg-blue-100 text-blue-800'
                  : type === 'backend'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {type}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg mb-1 text-gray-200">{title}</h3>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 my-2">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-300 text-gray-700 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-3">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                <FaExternalLinkAlt className="text-xs" />
                Demo
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                <FaCode className="text-xs" />
                Code
              </a>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};
