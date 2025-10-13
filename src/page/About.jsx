/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { TypewriterRoles } from "../component/TypewriterRoles";
import { services } from "../data/services";
import { fadeUp } from "../utils/animation";
import { Helmet } from "react-helmet-async";
import { fontend } from "../data/skil-backfont";


export const About = () => {

  return (
    <>
<Helmet>
  
<script type="application/ld+json">
{`
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Md. Ismail Ahammed Roman",
  "jobTitle": "Full Stack Web Developer",
  "url": "https://ismail-ahammed-roman.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/mdismailahammedroman/",
    "https://github.com/mdismailahammedroman"
  ]
}
`}
</script>

</Helmet>
    <div className="md:ml-64 flex-1 font-helvetica">
      <section className="min-h-screen px-4 md:px-10 py-8 bg-white">
        {/* Heading */}
        <main className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <section
            className="text-white font-bold text-2xl px-6 h-20 p-3 inline-block lg:-ml-14 w-40"
            style={{
              clipPath:
              "polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
            >
            <h2>About Me</h2>
          </section>
          <p className="text-gray-400 text-base italic font-bold">
            Hard working, Confident,Confident, Detail-Oriented, Self-Starter,
            Collaborative, Growth-Minded
          </p>
          
        </main>

        <motion.div
          className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 lg:mx-8 tracking-tight font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          >
          <TypewriterRoles />
        </motion.div>
        <div className="sm:mx-4 md:mx-8 items-start mt-10 text-justify">
  <p className=" tracking-wide text-gray-700">
    I'm a full-stack web developer with a{" "}
    <strong className="text-gray-600 tracking-tighter">
      Bachelor's degree in Computer Science & Engineering
    </strong>
    , and a strong focus on building modern, scalable, and user-friendly web applications. My core tech stack is the{" "}
    <strong className="text-gray-600 tracking-tighter">MERN stack</strong>{" "}
    <strong className="text-gray-600 tracking-tighter">
      (MongoDB, Express.js, React.js, and Node.js)
    </strong>
    , and I love working with{" "}
    <strong className="text-gray-600 tracking-tighter">TypeScript</strong>
    ,{" "}
    <strong className="text-gray-600 tracking-tighter">Tailwind CSS</strong>
    , and tools like{" "}
    <strong className="text-gray-600 tracking-tighter">Next.js</strong>
    ,{" "}
    <strong className="text-gray-600 tracking-tighter">Firebase</strong>, and{" "}
    <strong className="text-gray-600 tracking-tighter">PostgreSQL</strong>.
  </p>

  <p className="mt-4 tracking-wide text-gray-700">
    On the frontend, I create responsive, accessible, and visually clean interfaces that work seamlessly across all devices. On the backend, I build secure and efficient APIs, manage databases, and implement authentication systems using{" "}
    <strong className="text-gray-600 tracking-tighter">JWT</strong>,{" "}
    <strong className="text-gray-600 tracking-tighter">OAuth</strong>, and{" "}
    <strong className="text-gray-600 tracking-tighter">Firebase Auth</strong>. I follow best practices with{" "}
    <strong className="text-gray-600 tracking-tighter">version control</strong>,{" "}
    <strong className="text-gray-600 tracking-tighter">CI/CD</strong>, and{" "}
    <strong className="text-gray-600 tracking-tighter">error handling</strong> to ensure quality and maintainability.
  </p>

  <p className="mt-4 tracking-wide text-gray-700">
    I enjoy turning ideas into real, working products — whether it's a simple interface or a full-stack application. I'm a lifelong learner who’s always exploring, experimenting, and staying up to date with the latest in web development.
  </p>
</div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mx-0 sm:mx-4 md:mx-8 items-start mt-10"
          initial={{ opacity: 0, y: -30 }} // Starts 30px above
          animate={{ opacity: 1, y: 0 }} // Moves down to its normal position
          exit={{ opacity: 0, y: -30 }} // Optional: animate back up on exit
          transition={{ duration: 0.5, ease: "easeOut" }}
          >
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-yellow-500">
              Backend Skills & Deliverables
            </h2>
            <div className="text-gray-700 space-y-1 sm:space-y-1">
              {[
                [
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "TypeScript",
                  "JavaScript",
                ],
                [
                  "RESTful API development",
                  "API design",
                  "Database management",
                ],
                ["Version control", "PostgreSQL", "Mongoose", "Authentication"],
                ["JWT", "OAuth", "Firebase Auth", "Role-based access control"],
                ["Server deployment", "Vercel", "CI/CD", "Session", "Testing"],
                ["Postman", "Error handling", "zod", "Environment variables"],
                ["CRUD functionality", ".env", "dotenv", "Config management"],
                [],
              ].map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-wrap text-justify">
                  {group.map((skill, i) => (
                    <motion.span
                    key={i}
                    className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1 rounded text-sm sm:text-base"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                      viewport={{ once: true }}
                      custom={groupIndex * 5 + i} // unique delay for all badges
                      >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-yellow-500">
              Frontend Skills & Deliverables
            </h2>
            <div className="text-gray-700 space-y-1 sm:space-y-1">
              { [
        ["React.js", "Next.js", "HTML", "TypeScript", "Tailwind CSS"],
        ["CSS","Shadcn UI", "DaisyUI", "SCSS/SASS", "UI/UX",],
        ["Responsive Design","Mobile First","Figma to Code","Dark Mode",  ],
        [ "Theme Toggle", "React Router", "Single Page Applications (SPA)",],
        ["State Management", "Redux", "React Context API","Form Handling", ],
        ["React Hook Form", "Validation","Framer Motion", "Axios"],
        ["API Integration", "Fetch", "RTK Query","Lazy Loading"],
      ].map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-wrap text-justify">
                  {group.map((skill, i) => (
                    <motion.span
                    key={i}
                    className="bg-gray-200 hover:bg-amber-400 inline-block px-3 py-1 m-1 rounded text-sm sm:text-base"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={groupIndex * 5 + i} // unique delay for all badges
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mt-12 sm:mt-16 mx-4 sm:mx-6 lg:w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-yellow-500">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-gray-700">
            {services.map((service, i) => (
              <motion.div
              key={i}
              className="p-4 border hover:border-amber-400 rounded-lg shadow-sm bg-white cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              >
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Fun Facts */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-yellow-500 mt-4 mx-6">
          Fun Facts
        </h3>
        <motion.div
          className=" lg:w-full mt-4 mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
      </section>
    </div>
                  </>
  );
};
