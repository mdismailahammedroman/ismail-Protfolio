import React from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

import { 
  Cpu, Zap, Layers, Globe, GraduationCap, Briefcase, 
  MapPin, Calendar, Award, Code, Rocket, Heart, Shield, 
  University
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Corrected animation variants with proper types
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.8, 0.95, 1]);

  const cards = [
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: 'Scalable Architecture',
      description: 'Expertise in designing clean, scalable, and modular APIs that scale comfortably as your active user base grows.',
      gradient: 'from-purple-500/20 to-purple-600/5',
      borderHover: 'group-hover:border-purple-500/50',
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Performance-First',
      description: 'Experienced in reducing server response latency using Redis key-value store cache structures and advanced database indices.',
      gradient: 'from-cyan-500/20 to-cyan-600/5',
      borderHover: 'group-hover:border-cyan-500/50',
    },
    {
      icon: <Layers className="w-6 h-6 text-pink-400" />,
      title: 'Full-Stack Capability',
      description: 'Proficient in building interactive single page apps (React) and server-side rendered projects (Next.js) with robust DB structures.',
      gradient: 'from-pink-500/20 to-pink-600/5',
      borderHover: 'group-hover:border-pink-500/50',
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Remote Ready',
      description: 'Highly effective in remote, distributed teams across European and North American time zones with fluent communication.',
      gradient: 'from-emerald-500/20 to-emerald-600/5',
      borderHover: 'group-hover:border-emerald-500/50',
    },
  ];

  const stats = [
    { value: '1+', label: 'Years Experience', icon: <Award className="w-5 h-5" />, color: 'purple' },
    { value: '10+', label: 'Projects Completed', icon: <Code className="w-5 h-5" />, color: 'cyan' },
    { value: '100%', label: 'Client Satisfaction', icon: <Heart className="w-5 h-5" />, color: 'pink' },
    { value: '24/7', label: 'Support Available', icon: <Shield className="w-5 h-5" />, color: 'emerald' },
  ];

  const whyCollaborate = [
    { title: "Production-Ready Code", desc: "JWT auth, RBAC schemas, Zod validation, and comprehensive error handling", color: "purple" },
    { title: "Modern Frontend", desc: "Tailwind CSS, Framer Motion animations, and fully responsive layouts", color: "cyan" },
    { title: "System Integrity", desc: "Git workflows, CI/CD, environment configuration, and automated testing", color: "pink" },
    { title: "Communication First", desc: "Clear documentation, regular updates, and remote team collaboration", color: "emerald" }
  ];

  // JSON-LD Structured Data for SEO
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Md. Ismail Ahammed Roman - Full-Stack Web Developer",
    "description": "Full-Stack Web Developer with expertise in Node.js, TypeScript, React, PostgreSQL, MongoDB, and Redis. 1+ years of experience in building scalable backend systems.",
    "url": "https://mdismailahammedroman.dev/#about",
    "mainEntity": {
      "@type": "Person",
      "name": "Md. Ismail Ahammed Roman",
      "alternateName": "Roman",
      "jobTitle": "Full-Stack Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Betopia",
        "position": "Junior Backend Developer"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Computer Science & Engineering"
      },
      "knowsAbout": [
        "Node.js",
        "TypeScript", 
        "React",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "API Design",
        "Docker",
        "Git"
      ],
      "skills": "Full-Stack Development, Backend Engineering, API Design, Database Management",
      "description": "Passionate Full-Stack Developer building secure, scalable web applications with modern technologies."
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title> Md. Ismail Ahammed Roman - Full-Stack Developer Portfolio</title>
        <meta name="description" content="Learn about Md. Ismail Ahammed Roman, a Full-Stack Web Developer specializing in Node.js, TypeScript, React, and scalable backend systems. 1+ years of experience in building production-ready applications." />
        <meta name="keywords" content="About Full-Stack Developer, Backend Developer Portfolio, Node.js Developer, React Developer Bangladesh, MERN Stack Developer, Software Engineer" />
        <meta name="author" content="Md. Ismail Ahammed Roman" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mdismailahammedroman.dev/#about" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="About Md. Ismail Ahammed Roman | Full-Stack Web Developer" />
        <meta property="og:description" content="Full-Stack Developer with expertise in Node.js, TypeScript, React, and scalable backend systems. View my journey, skills, and experience." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://mdismailahammedroman.dev/#about" />
        <meta property="profile:first_name" content="Md. Ismail Ahammed" />
        <meta property="profile:last_name" content="Roman" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Md. Ismail Ahammed Roman | Full-Stack Developer" />
        <meta name="twitter:description" content="Learn about my journey as a Full-Stack Developer. Specialized in Node.js, TypeScript, React, and cloud databases." />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(aboutStructuredData)}
      </script>

      <section 
        id="about" 
        className="py-20 md:py-28 relative overflow-hidden"
        aria-label="About section - Background, skills, and expertise"
      >
        {/* Animated Background Decorations */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Floating animated circles */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Section Heading with Parallax */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs text-purple-300 font-medium">GET TO KNOW ME</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              About <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <motion.div 
              className="h-[3px] w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get to know my background, expertise, and what drives me as a developer
            </motion.p>
          </motion.div>

          {/* Narrative & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            
            {/* Main Bio Text with animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="lg:col-span-7"
            >
              <div className="space-y-5 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-500 group">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Rocket className="w-6 h-6 text-purple-400" />
                  Engineering web apps with clean code & high reliability
                </motion.h3>
                
                <motion.p 
                  className="text-sm sm:text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  I'm a <span className="text-purple-400 font-semibold">Full-Stack Web Developer</span> with a Bachelor's degree in 
                  Computer Science & Engineering, currently working as a <span className="text-cyan-400 font-semibold">Junior Backend Developer at Betopia</span> 
                  (Sept 2025 - Present). My passion lies in creating efficient, secure backend services and responsive, 
                  accessible frontend interfaces that users love.
                </motion.p>
                
                <motion.p 
                  className="text-sm sm:text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  From building secure financial ledgers and OCR-powered trucking pipelines to designing 
                  real-time weather analytics dashboards, I follow strict clean-code principles, implement 
                  automated error handling, and ensure containerized deployment ready for production.
                </motion.p>

                {/* Stats Row */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className={`text-${stat.color}-400 mb-1 flex justify-center`}>{stat.icon}</div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Info Cards */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300"
                  >
                    <GraduationCap className="w-9 h-9 text-purple-400 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">University</div>
                      <div className="text-sm font-semibold text-white">Northern University Bangladesh</div>
                      <div className="text-xs text-gray-500">B.Sc. in CSE · Graduated 2024</div>
                    </div>
                  
                  </motion.div>

                  <motion.div 
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <Briefcase className="w-9 h-9 text-pink-400 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Current Role</div>
                      <div className="text-sm font-semibold text-white">Junior Backend Dev</div>
                      <div className="text-xs text-gray-500">Betopia · Sept 2025 - Present</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <MapPin className="w-9 h-9 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Location</div>
                      <address className="text-sm font-semibold text-white not-italic">Dhaka, Bangladesh</address>
                      <div className="text-xs text-gray-500">🌍 Available Worldwide (Remote)</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300"
                  >
                    <Calendar className="w-9 h-9 text-orange-400 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Experience</div>
                      <div className="text-sm font-semibold text-white">1+ Years</div>
                      <div className="text-xs text-gray-500">Full-stack development</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Why Work With Me - Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
              className="lg:col-span-5"
            >
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h4 
                  className="text-lg font-bold text-white mb-4 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span 
                    className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"
                    animate={{ scaleY: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Why Collaborate With Me?
                </motion.h4>
                
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {whyCollaborate.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <motion.div 
                        className={`w-6 h-6 rounded-full bg-${item.color}-500/20 flex items-center justify-center shrink-0 mt-0.5`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className={`text-${item.color}-400 text-xs font-bold`}>✓</span>
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Motivational Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-center"
                >
                  <p className="text-xs text-gray-300 italic">
                    "Code is like humor. When you have to explain it, it's bad." – Cory House
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Pillars Grid - Skills Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="group"
              >
                <div className={`p-5 h-full flex flex-col items-start text-left rounded-xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm border border-white/10 ${card.borderHover} transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20`}>
                  <motion.div 
                    className="p-2.5 bg-white/10 rounded-xl mb-4"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {card.icon}
                  </motion.div>
                  <motion.h4 
                    className="text-base font-bold text-white mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {card.title}
                  </motion.h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center z-50"
            style={{ opacity, scale }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-xs text-purple-400 font-bold">
              {Math.round(scrollYProgress.get() * 100)}%
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;