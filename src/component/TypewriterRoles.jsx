import React, { useState, useEffect } from 'react';

const titles = ["Programmer", "Frontend Developer", "Backend Developer"];

export const TypewriterRoles = ({ speed = 100, pause = 1500 }) => {
    const [text, setText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentTitle = titles[titleIndex];
  
      let typingSpeed = isDeleting ? speed / 2 : speed;
  
      const timeout = setTimeout(() => {
        if (isDeleting) {
          setText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }
  
        if (!isDeleting && charIndex === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }, typingSpeed);
  
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex, speed, pause]);

  return (
    <div
    className=" text-base sm:text-lg leading-relaxed mt-4"
  >
    <h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "monospace" }}
    >
      {text}
      <span className="blinking-cursor">|</span>
    </h2>
  </div>
  );
};
