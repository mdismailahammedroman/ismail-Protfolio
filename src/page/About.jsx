/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { TypewriterRoles } from "../component/TypewriterRoles";


export const About = () => {
 
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
                "polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p>About Me</p>
          </div>
          <p className="text-gray-400 text-base italic font-bold">
          Hard working, Confident,Confident, Detail-Oriented, Self-Starter,
          Collaborative, Growth-Minded
          </p>
        </div>

        <motion.div
            className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 mx-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <TypewriterRoles/>
          </motion.div>
          <div className=" mx-0 sm:mx-4 md:mx-8 items-start mt-10  text-justify max-w-5xl">
          <p className="mt-4 tracking-tighter font-medium text-gray-500">
              I hold a Bachelor's degree in{" "}
              <strong className="text-gray-800  ">
                Computer Science & Engineering (BSc in CSE)
              </strong>
              , and I specialize in modern web development using the{" "}
              <strong className="text-gray-800  ">MERN stack</strong>{" "}
              <strong className="text-gray-800  "> (MongoDB, Express.js, React.js, and Node.js).
              </strong>{" "}
            </p>

            <p className="mt-4 tracking-tighter font-medium text-gray-500">
              I'm proficient in technologies like{" "}
              <strong className="text-gray-800  ">Node.js</strong>,{" "}
              <strong className="text-gray-800  ">React.js</strong>, and{" "}
              <strong className="text-gray-800  ">TypeScript</strong>,
              with a strong focus on building scalable, efficient, and
              user-friendly web applications. Whether it's developing robust
              backend APIs or crafting intuitive frontend interfaces, I strive
              to deliver high-quality solutions tailored to real-world needs.
            </p>

            <p className="mt-4 tracking-tighter font-medium text-gray-500">
              I'm a lifelong learner who thrives in fast-paced environments,
              values clean code, and enjoys collaborating with other developers
              to bring ideas to life.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mx-0 sm:mx-4 md:mx-8 items-start mt-10"
            initial={{ opacity: 0, y: -30 }}     // Starts 30px above
            animate={{ opacity: 1, y: 0 }}       // Moves down to its normal position
            exit={{ opacity: 0, y: -30 }}        // Optional: animate back up on exit
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-yellow-500">
                Backend Skills & Deliverables
              </h2>
              <div className="text-gray-700 space-y-1 sm:space-y-1">
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Node.js
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Express.js
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    MongoDB
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Firebase
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    RESTful API development
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    API design
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    database management
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    version control
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Authentication
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    JWT
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    OAuth
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Firebase Auth
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Server deployment
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Vercel
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Render
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Railway
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Database design
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    &
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    optimization
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Admin panel
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    &
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    CRUD functionality
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-yellow-500">
                Frontend Skills & Deliverables
              </h2>
              <div className="text-gray-700 space-y-1 sm:space-y-1">
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    React.js
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    HTML
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    CSS
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Responsive
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Design
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    DaisyUI
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    HeroUI
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    UI/UX
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Theme toggle
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Dark
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Light mode
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    React Awesome Reveal
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Animation
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Motion
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Aos
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    SPA - Single Page Application
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    React Router
                  </span>
                </div>
                <div className="flex flex-wrap text-justify">
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Dom
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    Form validation
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    &
                  </span>
                  <span className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1  rounded text-sm sm:text-base">
                    integration
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
           {/* Fun Facts */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-yellow-500 mt-4 mx-6">
            Fun Facts
          </h3>
          <motion.div
            className="mt-4 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div
              className="p-6 rounded-lg border bg-gray-50 hover:border-yellow-400 hover:shadow-md transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-gray-400 mb-3 cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14a3 3 0 100-6 3 3 0 000 6z"
                  />
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 8.91l1.65-1.65m-8.48 0L7.11 7.26M16.24 16.24l1.65 1.65M6.11 17.89l1.65-1.65"
                  />
                </svg>
              </motion.div>
              <p className="text-center text-gray-700 font-medium">
                Happy Clients
              </p>
              <p className="text-center text-yellow-500 text-2xl font-bold mt-2">
                70+
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="p-6 rounded-lg border bg-gray-50 hover:border-yellow-400 hover:shadow-md transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-400 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 2"
                  />
                  <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
                </svg>
              </div>
              <p className="text-center text-gray-700 font-medium">
                Working Hours
              </p>
              <p className="text-center text-yellow-500 text-2xl font-bold mt-2">
                8,556
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="p-6 rounded-lg border bg-gray-50 hover:border-yellow-400 hover:shadow-md transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-400 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-5"
                  />
                  <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
                </svg>
              </div>
              <p className="text-center text-gray-700 font-medium">
                Portfolios Completed
              </p>
              <p className="text-center text-yellow-500 text-2xl font-bold mt-2">
                30+
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="p-6 rounded-lg border bg-gray-50 hover:border-yellow-400 hover:shadow-md transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-400 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 8h12v6a4 4 0 01-4 4H10a4 4 0 01-4-4V8z"
                  />
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 8V6h8v2"
                  />
                </svg>
              </div>
              <p className="text-center text-gray-700 font-medium">
                Coffee Consumed
              </p>
              <p className="text-center text-yellow-500 text-2xl font-bold mt-2">
                N/A
              </p>
            </motion.div>
          </motion.div>
           {/* Services Section */}
           <motion.div
            className="mt-12 sm:mt-16 mx-4 sm:mx-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-yellow-500">
              Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-gray-700">
              {/* Service Card 1 */}
              <motion.div
                className="p-4 border hover:border-amber-400 rounded-lg shadow-sm bg-white cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-2">
                  Full-Stack Web Development
                </h3>
                <p>
                  End-to-end development using MERN stack with optimized
                  performance.
                </p>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div
                className="p-4 border  hover:border-amber-400 rounded-lg shadow-sm bg-white cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-2">Custom Admin Dashboard</h3>
                <p>
                  Fully functional dashboards with user, product & order
                  management.
                </p>
              </motion.div>

              {/* Service Card 3 */}
              <motion.div
                className="p-4 border  hover:border-amber-400 rounded-lg shadow-sm bg-white cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-2">
                  Portfolio / Landing Pages
                </h3>
                <p>
                  Responsive & animated personal/brand sites tailored for modern
                  needs.
                </p>
              </motion.div>
            </div>
          </motion.div>
      </section>
    </div>
  );
};
