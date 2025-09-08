/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

export const Resume = () => {
  return (
    <div className="md:ml-64 flex-1 font-roboto">
      <section
        id="about"
        className="min-h-screen px-4 sm:px-6 md:px-10 py-8 sm:py-12 bg-white text-gray-800"
      >
        {/* About Me Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className="text-white font-bold text-xl sm:text-2xl px-4 sm:px-6 py-3 sm:py-6 inline-block -ml-14"
            style={{
              clipPath:
                "polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p className="-mt-1 sm:-mt-3 ">Resume</p>
          </div>
          <p
            className="text-gray-400 text-sm sm:text-base font italic font-bold
"
          >
            4+ Years of Experience
          </p>
        </motion.div>
        <div className="container mx-auto flex flex-col items-start md:flex-row my-3 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="text-xl md:text-2xl leading-normal md:leading-relaxed mb-2 text-gray-800 uppercase tracking-loose underline decoration-amber-400">
              Education
            </p>
           
            <p className="text-sm md:text-base text-gray-600 mb-4 ">
            My academic path reflects continuous learning and adapting to new challenges.
            </p>
           
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2 absolute h-full"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div
                  className="border-2 absolute h-full"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-500">
                      2020-2024
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    BS in Computer Science & Engineering
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Northern University Bangladesh
                    </p>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-gray-500">
                     2013-2017
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Diploma in Engineering <strong className="text-gray-500">Computer Science</strong>
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Muslim Aid Institute of Science of Technology
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Rangpur, Bangladesh</p>
                    
                    </p>


                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-500">
                      {" "}
                     2010-2012
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Secondary School certificate (SSC)
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Taluk Jamila B/L High School
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Gaibandha, Bangladesh</p> 
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                   <p className="mb-3 text-base text-gray-500">
                      {" "}
                     2025
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Next Level Web Development
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Programming Hero
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                    Dhaka, Bangladesh</p> 
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="text-xl md:text-2xl leading-normal md:leading-relaxed mb-2 text-gray-800 uppercase tracking-loose underline decoration-amber-400">
              Skills
            </p>
        
            <p className="text-sm md:text-base text-gray-600 mb-4">
            Skilled in building complete web applications from frontend to backend.
            </p>
          
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2 absolute h-full"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div
                  className="border-2 absolute h-full"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                 
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-gray-500">
                      6-9 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-500">
                      {" "}
                      10 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-gray-500">12 May, 2021</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Prize Distribution
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
