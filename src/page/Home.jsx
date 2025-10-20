/* eslint-disable no-unused-vars */
import React from "react";
import ismail1 from "../assets/ismsmile.jpeg";
import { TypewriterRoles } from "../component/TypewriterRoles";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const text = "Md. Ismail Ahammed Roman";


export const Home = () => {
  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  };
  
  const letterVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: [-50, 0, -10, 0, 0, 0, 0, 0],
    x: [0, 0, 0, 0, -2, 2, -2, 2, 0],
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hover: {
    y: [0, -15, 0],
    scale: [1, 1.2, 1],
    color: ["#ffffff", "#facc15", "#ffffff"],
    transition: { 
      duration: 0.6, 
      ease: "easeInOut",
      times: [0, 0.5, 1]
    },
  },
  };
  return (
    <>
      <Helmet>
        <title>
          Professional Full Stack Developer | Md. Ismail Ahammed Roman
        </title>
        <meta
          name="description"
          content="I build fast, secure, and SEO-optimized web applications using React, Node.js, and modern technologies."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React Developer, Node.js Developer, Web Developer in Bangladesh, Md. Ismail Ahammed Roman"
        />
        <meta name="author" content="Md. Ismail Ahammed Roman" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ismail-ahammed-roman.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Md. Ismail Ahammed Roman | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Fast, responsive and SEO-optimized websites with React and Node.js"
        />
        <meta
          property="og:image"
          content="https://ismail-ahammed-roman.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://ismail-ahammed-roman.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Md. Ismail Ahammed Roman | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Fast, secure, modern websites with React.js and Node.js"
        />
        <meta name="twitter:image" content="https://x.com/ismailahammedr3" />
      </Helmet>
      <div className="md:ml-64 flex-1 overflow-hidden ">
        {" "}
        <section className="relative min-h-screen px-4 md:px-10 py-8 bg-cover bg-center bg-no-repeat text-white background">
          {" "}
          {/* ✅ Overlay */}{" "}
          <div className="absolute inset-0 bg-black/60 z-0"></div>{" "}
          <motion.div
            className="absolute inset-0 h-full w-full bg-black/60 z-20"
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />{" "}
          {/* ✅ Content wrapper should be relative and above overlay */}{" "}
          <div className="relative z-10 ">
            {" "}
            {/* Heading */}{" "}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              {" "}
              <p className="text-gray-200 text-base italic font-bold">
                {" "}
                Ismail Ahammed Roman{" "}
              </p>{" "}
            </div>
            {/* Main content layout */}
            <div className="w-full flex flex-col items-center gap-10">
              {" "}
              {/* Images */}
              <div className=" justify-center items-center gap-2 hidden lg:flex">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                  className="w-16 h-48 overflow-hidden"
                >
                  {" "}
                  <img
                    src={ismail1}
                    alt="Md. Ismail Ahammed Roman - Full Stack Developer"
                    className="w-full h-full object-cover object-[5%] scale-180"
                  />{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                  className="w-20 h-56 overflow-hidden"
                >
                  {" "}
                  <img
                    src={ismail1}
                    alt="Portrait of Ismail - left"
                    className="w-full h-full object-cover object-[11%] scale-130"
                  />{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
                  className="w-44 h-72 overflow-hidden rounded shadow-lg"
                >
                  {" "}
                  <img
                    src={ismail1}
                    alt="Portrait of Ismail - center"
                    className="w-full h-full object-cover object-center scale-[1]"
                  />{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeInOut" }}
                  style={{ originX: 1 }}
                  className="w-20 h-56 overflow-hidden"
                >
                  {" "}
                  <img
                    src={ismail1}
                    alt="Portrait of Ismail - right"
                    className="w-full h-full object-cover object-[88%] opacity-80 scale-120 mt-3"
                  />{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.5, ease: "easeInOut" }}
                  style={{ originX: 1 }}
                  className="w-16 h-48 overflow-hidden"
                >
                  {" "}
                  <img
                    src={ismail1}
                    alt="Portrait of Ismail - far right"
                    className="w-full h-full object-cover object-[100%] opacity-70 scale-160"
                  />{" "}
                </motion.div>{" "}
              </div>
              {/* Text content */}
              <div className="text-center lg:text-left max-w-xl">
                <motion.h1
                  className="flex flex-wrap text-2xl sm:text-3xl md:text-4xl font-bold justify-center lg:justify-start mb-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      whileHover="hover"
                      className="inline-block cursor-pointer select-none"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>

                <div className="text-lg sm:text-xl mb-4 tracking-tight">
  <TypewriterRoles />
</div>

                <ul className="space-y-2 text-gray-300 text-sm sm:text-base font-medium">
                  <li
                  >
                    <strong className="text-yellow-400">Address:</strong>{" "}
                    Mirpur, Dhaka, Bangladesh
                  </li>
                  <li>
                    <strong className="text-yellow-400">E-mail:</strong>{" "}
                    ismailahmmedroman@gmail.com
                  </li>
                  <li>
                    <strong className="text-yellow-400">Freelance:</strong>{" "}
                    Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
