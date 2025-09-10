/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Task Manager App",
    description:
      "A full-stack task management system with JWT auth, drag-and-drop UI, and MongoDB backend.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    demo: "#",
    code: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Built with MERN stack, Stripe payments, cart, filtering, and admin dashboard.",
    stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    demo: "#",
    code: "#",
  },
  {
    title: "Dev Blog API",
    description:
      "RESTful API for a developer blog platform with auth, comments, and PostgreSQL ORM.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    demo: "#",
    code: "#",
  },
];

export const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  return (
    <div className="md:ml-64 flex-1 font-roboto">
      <section className="min-h-screen px-4 md:px-10 py-8 bg-white text-gray-800">
        {/* Heading */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
          
        >
          <div
            className="text-white font-bold text-2xl px-6 h-18 p-3 inline-block lg:-ml-14"
            style={{
              clipPath:
                "polygon(0 0, 100% 0%, 100% 73%, 11% 73%, 11% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p>Portfolio</p>
          </div>
          <p className="text-gray-400 text-base italic font-bold">
            My Best Works
          </p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}     // Starts 30px above
          animate={{ opacity: 1, y: 0 }}       // Moves down to its normal position
          exit={{ opacity: 0, y: -30 }}        // Optional: animate back up on exit
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl font-bold text-center mb-12 underline decoration-amber-400"
        >
          Portfolio Projects
        </motion.h2>

        {/* Timeline */}
        <section className="relative px-6 py-12">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-amber-400 transform -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-16 max-w-6xl mx-auto relative z-10">
            {projects.map((item, index) => {
             

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-400 border-4 border-white rounded-full z-10" />

                  {/* Card */}
                  <div
                    className={`bg-gray-100 rounded-lg shadow-md p-6 w-full md:w-[48%] ${
                      index % 2 === 0
                        ? "md:ml-0 md:mr-auto"
                        : "md:ml-auto md:mr-0"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto pt-2 border-t border-gray-200">
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 font-medium hover:underline"
                      >
                        Live Demo
                      </a>
                      <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 font-medium hover:underline"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};
