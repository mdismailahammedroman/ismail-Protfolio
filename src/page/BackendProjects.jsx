/* eslint-disable no-unused-vars */
import React from "react";
import { Cardsss } from "../component/Cardsss";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { zoomInUp}  from "../utils/animation";

const BackendProjects = () => {
  const backendProjects = projects.filter((p) => p.type === "backend");

  return (
    <section className="relative px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Backend Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {backendProjects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={zoomInUp}
          >
            <Cardsss {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BackendProjects;
