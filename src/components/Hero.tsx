import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import { ThreeDSpaceSystem } from './ThreeDSpaceSystem';

const TypingText: React.FC = () => {
  const roles = [
    'Full-Stack Web Developer',
    'Backend Specialist',
    'MERN Stack Engineer',
    'Problem Solver & Programmer'
  ];
  const [currentText, setCurrentText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    let timer: any;
    const activeRole = roles[roleIdx];

    if (isDeleting) {
      setSpeed(35);
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
      }, speed);
    } else {
      setSpeed(75);
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIdx]);

  return (
    <span className="relative">
      <span className="gradient-text-accent">{currentText}</span>
      <span className="ml-1 inline-block w-1 h-5 sm:h-7 bg-cyan-400 animate-pulse">|</span>
    </span>
  );
};

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* 3D Orbiting Planets System Background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <ThreeDSpaceSystem />
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full radial-glow-violet blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full radial-glow-cyan blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative w-50 h-50 sm:w-50 sm:h-50 mx-auto mb-6 group"
        >
          {/* Neon outer breathing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 blur-md opacity-75 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow" />
          {/* Inner image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-purple-400/50 transition-colors duration-500">
            <img 
              src={profileImg} 
              alt="Md. Ismail Ahammed Roman"
              className="w-full h-full object-cover scale-110 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Available for hire badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-2xs font-bold uppercase tracking-wider mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
Remote • Hybrid • Freelance        </motion.div>

        {/* Hello Greeting */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 font-semibold text-sm sm:text-base tracking-widest uppercase mb-3 font-heading"
        >
          Hi, my name is
        </motion.h3>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 font-heading"
        >
          <span className="gradient-text-primary">Md. Ismail Ahammed </span>
          <span className="gradient-text-accent">Roman</span>
        </motion.h1>

        {/* Role Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-300 font-heading mb-6 min-h-[40px] flex items-center justify-center"
        >
          <TypingText />
        </motion.h2>

        {/* Brief Intro */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build secure, scalable backend systems and modern web applications using Node.js, TypeScript, PostgreSQL, MongoDB, Redis, and React. I focus on clean API design, performance optimization, and production-ready architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
          >
            Explore Projects
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm border border-white/10 hover:border-purple-500/40 bg-white/5 hover:bg-purple-500/5 text-white active:scale-98 transition-all cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-5 text-gray-400"
        >
          <a
            href="https://www.linkedin.com/in/mdismailahammedroman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/mdismailahammedroman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:ismailahmmedroman@gmail.com"
            className="hover:text-pink-400 transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-pink-500/30"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

      </div>

      {/* Floating indicator */}
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors cursor-pointer animate-float-medium"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold font-heading">Scroll Down</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};
