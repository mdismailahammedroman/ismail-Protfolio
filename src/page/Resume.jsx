/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { LanguageBar } from "../component/LanguageBar";
import { IoIosArrowForward } from "react-icons/io";

const languages = [
  { name: "JavaScript", level: 80 },
  { name: "Typescript", level: 75 },
  { name: "HTML & CSS", level: 98 },
  { name: "SASS / SCSS", level: 85 },
];
const Frameworks=[
  { name: "Express.js:", level: 70 },
  { name: "NextJs:", level: 40 },
  { name: "Tailwind CSS:", level: 90 },
]
const Database=[
  { name: "MongoDB", level: 75 },
  { name: "postgresql", level: 70 },
]
const Libraries =[
  { name: "React", level: 80 },
  { name: "React Router", level: 90 },
  { name: "Redux, React Hook", level: 75 },
  { name: " Framer Motion", level: 75 },
  { name: " RESTful API;", level: 80 },
]
const Storage=[
  { name: "FireBase, Vercel", level: 90 },
]
const Tools=[
  { name: "GitHub, Git, Vscode", level: 90 },
]

const TimelineItem = ({
  direction = "left",
  year,
  title,
  subtitle,
  location,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const isLeft = direction === "left";
  const animation = {
    initial: { opacity: 0, x: isLeft ? -50 : 50 },
    animate: isInView
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: isLeft ? -50 : 50 },
    transition: { duration: 0.5 },
  };

  const containerClasses = `mb-8 flex justify-between items-center w-full ${
    isLeft ? "flex-row-reverse left-timeline" : "right-timeline"
  }`;

  return (
    <motion.div ref={ref} {...animation} className={containerClasses}>
      <div className="order-1 w-5/12"></div>
      <div
        className={`order-1 w-5/12 px-1 py-4 ${
          isLeft ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`h-10 w-22 p-1 ${isLeft ? "ml-auto" : ""}`}
          style={{
            clipPath: isLeft
              ? "polygon(0% 0%, 100% 0%, 100% 55%, 100% 75%, 86% 100%, 86% 75%, 0% 75%)"
              : "polygon(0% 0%, 100% 0%, 100% 75%, 12% 75%, 12% 100%, 0 75%, 0% 75%)",
            backgroundColor: "#9bd952",
          }}
        >
          <p className="text-center text-xm font-bold text-gray-600  tracking-tighter">
            {year}
          </p>
        </div>
        <h4 className="mb-3 font-bold text-lg md:text-xl tracking-tighter text-gray-700">{title}</h4>
        <p className="text-sm md:text-base leading-snug text-gray-500 tracking-tighter font-medium ">
          {subtitle}
        </p>
        <p className="text-sm md:text-base leading-snug text-gray-400 italic">
          {location}
        </p>
      </div>
    </motion.div>
  );
};

export const Resume = () => {
  return (
    <div className="md:ml-64 flex-1 font-roboto">
      <section className="min-h-screen px-4 md:px-10 py-8 bg-white text-gray-800">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
         
        >
          <div
            className="text-white font-bold text-2xl px-6 h-18 p-3 inline-block lg:-ml-14"
            style={{
              clipPath:
                "polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p>Resume</p>
          </div>
          <p className="text-gray-400 text-base italic font-bold">
            4+ Years of Experience
          </p>
        </div>

        <div className="container mx-auto flex flex-col items-start lg:flex-row my-3 ">
          {" "}
          <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            {" "}
            <p className="text-xl tracking-tighter font-bold md:text-2xl leading-normal md:leading-relaxed mb-2 text-gray-500  tracking-loose">
              {" "}
              Education{" "}
            </p>{" "}
            <p className="text-sm md:text-base font-medium  text-gray-400 mb-4 tracking-tighter italic">
              {" "}
              My academic path reflects continuous learning and adapting to new
              challenges.{" "}
            </p>{" "}
          </div>
          <div className="lg:w-2/3">
            <div className="relative p-10">
              <div
                className="absolute h-full border-2"
                style={{
                  right: "50%",
                  borderColor: "#FFC100",
                  borderRadius: "1%",
                }}
              />
              <div
                className="absolute h-full border-2"
                style={{
                  left: "50%",
                  borderColor: "#FFC100",
                  borderRadius: "1%",
                }}
              />

              <TimelineItem
                direction="left"
                year="2020-2024"
                title="BS in Computer Science & Engineering"
                subtitle="Northern University Bangladesh"
                location="Dhaka, Bangladesh"
              />

              <TimelineItem
                direction="right"
                year="2013-2017"
                title="Diploma in Engineering (Computer Science)"
                subtitle="Muslim Aid Institute of Science & Technology"
                location="Rangpur, Bangladesh"
              />

              <TimelineItem
                direction="left"
                year="2010-2012"
                title="Secondary School Certificate (SSC)"
                subtitle="Taluk Jamila B/L High School"
                location="Gaibandha, Bangladesh"
              />

              <TimelineItem
                direction="right"
                year="2025 - 2025"
                title="Next Level Web Development"
                subtitle="Programming Hero"
                location="Dhaka, Bangladesh"
              />
            </div>

            <img
              className="mx-auto -mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              alt="Timeline graphic"
            />
          </div>
        </div>

        {/* Skills
         */}

        <div className="container mx-auto flex flex-col items-start lg:flex-row my-3 ">
          {" "}
          <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3  md:mt-12 px-8">
            {" "}
            <p className="text-xl tracking-tighter font-bold md:text-2xl leading-normal md:leading-relaxed mb-2 text-gray-500  tracking-loose">

              {" "}
              Skills
            </p>
            <p className="text-sm md:text-base font-medium text-gray-400 mb-4 tracking-tighter italic">

              Skilled in building complete Web Applications from Frontend to
              Backend.
            </p>
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="relative p-5">
            <div className="px-4 md:px-10">
                <div className="flex items-center">
                    <IoIosArrowForward className="mt-2"/>
                <h2  className=" mb-2 text-lg italic font-medium  text-gray-400 mt-4 oration-amber-400">
                  Languages
                  </h2>
                </div>
                {languages.map((lang) => (
                  <LanguageBar
                    key={lang.name}
                    name={lang.name}
                    level={lang.level}
                  />
                ))}
              </div>
              <div className="px-4 md:px-10">
                <div className="flex items-center">
                    <IoIosArrowForward className="mt-2"/>
                 <h2 className=" mb-2 text-lg italic font-medium  text-gray-400 mt-4 ">
                  Frameworks
                  </h2>
                </div>
                {Frameworks.map((Frame) => (
                  <LanguageBar
                    key={Frame.name}
                    name={Frame.name}
                    level={Frame.level}
                  />
                ))}
              </div>
              <div className="px-4 md:px-10">
                <div className="flex items-center">
                    <IoIosArrowForward className="mt-2"/>
                 <h2 className=" mb-2 text-lg italic font-medium  text-gray-400 mt-4 ">
                  Database
                  </h2>
                </div>
                {Database.map((data) => (
                  <LanguageBar
                    key={data.name}
                    name={data.name}
                    level={data.level}
                  />
                ))}
              </div>
              <div className="px-4 md:px-10">
                <div className="flex items-center">
                    <IoIosArrowForward className="mt-2"/>
                 <h2 className=" mb-2 text-lg italic font-medium  text-gray-400 mt-4 ">
                  Libraries & APIs
                  </h2>


                </div>
                {Libraries.map((librari) => (
                  <LanguageBar
                    key={librari.name}
                    name={librari.name}
                    level={librari.level}
                  />
                ))}
              </div>
              <div className="px-4 md:px-10">
                <div className="flex items-center">
                    <IoIosArrowForward className="mt-2"/>
                <h2  className=" mb-2 text-lg italic font-medium  text-gray-400 mt-4 ">
                  Storage
                  </h2>


                </div>
                {Storage.map((lang) => (
                  <LanguageBar
                    key={lang.name}
                    name={lang.name}
                    level={lang.level}
                  />
                ))}
              </div>
              <div className="px-4 md:px-10">
                <div className="flex items-center">
                    <IoIosArrowForward className="mt-2"/>
                <h2 className=" mb-2 text-lg italic font-medium  text-gray-400 mt-4 "> 
                  Tools
                  </h2>
                </div>
                {Tools.map((tool) => (
                  <LanguageBar
                    key={tool.name}
                    name={tool.name}
                    level={tool.level}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
