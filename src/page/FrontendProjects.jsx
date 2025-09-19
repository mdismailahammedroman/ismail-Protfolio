/* eslint-disable no-unused-vars */
import React from "react";
import { Cardsss } from "../component/Cardsss";
import projects from "../data/projects";
import { motion } from "framer-motion";
import {  zoomInUp } from "../utils/animation";


const FrontendProjects = () => {
  const frontendProjects = projects.filter((p) => p.type === "frontend");

  return (
    <section className="relative px-6 py-12">
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frontendProjects.map((project, i) => (
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

export default FrontendProjects;
