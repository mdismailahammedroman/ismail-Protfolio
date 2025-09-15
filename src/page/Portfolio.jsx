/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cardsss } from "../component/Cardsss";
import career from "../assets/creere.jpg"
import careerImage from "../assets/creere.jpg";



const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Built with MERN stack, Stripe payments, cart, filtering, and admin dashboard.",
    stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    demo: "#",
    code: "#",
    image: career
  },
  {
    title: "Dev Blog API",
    description:
      "RESTful API for a developer blog platform with auth, comments, and PostgreSQL ORM.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    demo: "#",
    code: "#",
    image: career
  },
  {
    title: "BookVerse - Fontend",
    description:
      "Library-management-system frontend with Reactjs, Typescript",
    stack: ["React", "Tailwind css ", "Redux", "RTK query", "TypeScript"],
    demo: "https://library-management-fontend.vercel.app/",
    code: "https://github.com/ismailahammed1/Library-Management-System_fontend",
    image: career

  },
  {
    title: "BookVerse - Backend",
    description:
      "Library-management-system Backend with MongoDB, TypeScript",
    stack: ["MongoDB", "Nodejs", "Expressjs", "Mongoose", "TypeScript"],
    demo: "https://library-management-api-ivory.vercel.app/api/books/",
    code: "https://github.com/ismailahammed1/Library-Managements",
    image: career
  },
  {
    title: "Sports Equipment Marketplace",
    description:
      "Library-management-system Backend with MongoDB, React.js Deployment: Firebase Hosting and Authentication: Firebase",
    stack: ["React.js", "Tailwind CSS", "DaisyUI", "React Router", "Node.js", "Express.js", "MongoDB"],
    demo: "https://sportsgear-19a96.web.app/",
    code: "https://github.com/ismailahammed1/SportsGear-clientSide",
    image: career
  },
  {
    title: "IAR career counselling",
    description:
      "career counselling Fontend, React.js Deployment: Firebase Hosting and Authentication: Firebase",
    stack: ["React.js", "Tailwind CSS", "DaisyUI", "React Router", "Node.js", "Express.js", "MongoDB"],
    demo: "https://sportsgear-19a96.web.app/",
    code: "https://github.com/ismailahammed1?tab=repositories",
    image: careerImage
  },
];


const TimelineItem = ({ direction = "left", title, description, stack, demo, code, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const isLeft = direction === "left";
  const animation = {
    initial: { opacity: 0, x: isLeft ? -50 : 50 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 },
    transition: { duration: 0.5 },
  };

  const containerClasses = `mb-8 flex justify-between items-center w-full ${
    isLeft ? "flex-row-reverse left-timeline" : "right-timeline"
  }`;

  return (
    <motion.div ref={ref} {...animation} className={containerClasses}>
      <div className="order-1 w-5/12"></div>
      <div className={`order-1 w-5/12 px-1 py-4 ${isLeft ? "text-right" : "text-left"}`}>
        {/* Pass the data to Cardsss */}
        <Cardsss
          title={title}
          description={description}
          stack={stack}
          demo={demo}
          code={code}
          image={image} 
        />
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <div className="md:ml-64 flex-1 font-roboto">
      <section className="min-h-screen px-4 md:px-10 py-8 bg-white text-gray-800">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <div
            className="text-white font-bold text-2xl px-6 h-18 p-3 inline-block lg:-ml-14"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 100% 73%, 11% 73%, 11% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p>Portfolio</p>
          </div>
          <p className="text-gray-400 text-base italic font-bold">My Best Works</p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 underline decoration-amber-400"
        >
          Portfolio Projects
        </motion.h2>

        {/* Timeline with Animated Cards */}
        <section className="relative px-6 py-12">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-amber-400 transform -translate-x-1/2 z-0" />
          <div className="flex flex-col gap-16 max-w-6xl mx-auto relative z-10">
            {projects.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                description={item.description}
                stack={item.stack}
                demo={item.demo}
                code={item.code}
                image={item.image}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};