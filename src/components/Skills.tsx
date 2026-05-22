import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server } from 'lucide-react';
import { ThreeDTagCloud } from './ThreeDTagCloud';

export const Skills: React.FC = () => {
  const backendSkills = [
    { title: 'Core Stack', items: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'JavaScript'] },
    { title: 'API & Database', items: ['RESTful APIs', 'PostgreSQL', 'Mongoose', 'Redis Caching'] },
    { title: 'Auth & Security', items: ['JWT Systems', 'OAuth', 'Firebase Auth', 'RBAC Security'] },
    { title: 'Tools & DevOps', items: ['Git/GitHub', 'Docker', 'Vercel Deployment', 'CI/CD Pipelines'] },
    { title: 'Testing & Config', items: ['Postman Testing', 'Zod Validation', 'Dotenv Config', 'Error Handling'] },
  ];

  const frontendSkills = [
    { title: 'Core UI', items: ['React.js', 'Next.js', 'HTML5', 'TypeScript', 'Tailwind CSS'] },
    { title: 'CSS & Design', items: ['Shadcn UI', 'DaisyUI', 'SCSS/SASS', 'Responsive UI/UX'] },
    { title: 'Routing & State', items: ['React Router', 'Redux Toolkit', 'Context API', 'SPA Arch'] },
    { title: 'Forms & Data', items: ['React Hook Form', 'Zod Integration', 'Framer Motion', 'Axios/Fetch'] },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Skills & <span className="gradient-text-accent">Expertise</span>
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Skills Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive 3D Sphere side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col text-left order-2 lg:order-1 "
          >
            <ThreeDTagCloud />
            <div className="mt-4 text-2xs text-gray-500 font-semibold uppercase tracking-wider">
              ✦ Swipe / Drag the sphere to rotate in 3D ✦
            </div>
          </motion.div>

          {/* Categorized Skills side */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            {/* Backend Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl glass border border-white space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Backend Development & Systems
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                Focused on designing stateless APIs, managing relational and non-relational database structures, and building secure server networks.
              </p>

              <div className="space-y-3.5">
                {backendSkills.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-2xs font-bold uppercase tracking-wider text-purple-400">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.items.map((item, keyIdx) => (
                        <span 
                          key={keyIdx}
                          className="px-2.5 py-1 rounded-md text-2xs font-medium bg-purple-950/20 border border-purple-500/10 text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frontend Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 rounded-2xl glass border border-white/5 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Frontend Design & UI/UX
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                Creating responsive, accessible, and fast single page applications (SPA) with consistent UI, client validations, and transitions.
              </p>

              <div className="space-y-3.5">
                {frontendSkills.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-2xs font-bold uppercase tracking-wider text-cyan-400">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.items.map((item, keyIdx) => (
                        <span 
                          key={keyIdx}
                          className="px-2.5 py-1 rounded-md text-2xs font-medium bg-cyan-950/20 border border-cyan-500/10 text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
