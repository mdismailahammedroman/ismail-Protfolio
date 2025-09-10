/* eslint-disable no-unused-vars */

import React from 'react';
import ismail1 from '../assets/Ismail-ahammed-roman.-01.jpeg';
import { TypewriterRoles } from '../component/TypewriterRoles';
import { motion } from 'framer-motion';



export const Home = () => {
 

  return (
    <div className="md:ml-64 flex-1 font-roboto overflow-hidden">
      <section
        className="relative min-h-screen px-4 md:px-10 py-8 bg-cover bg-center bg-no-repeat text-white background"
      >
        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <motion.div
  className="absolute inset-0 h-full w-full bg-black/40 z-20"
  initial={{ x: '0%' }}
  animate={{ x: '100%' }}
  transition={{ duration: 1.2, ease: 'easeInOut' }}
/>


      

        {/* ✅ Content wrapper should be relative and above overlay */}
        <div className="relative z-10">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <div
              className=" text-white font-bold text-2xl px-6 h-18 p-3 mt inline-block lg:-ml-10"
              style={{
                clipPath:
                  'polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 73%, 0 73%, 0 14%)',
                backgroundColor: '#facc15',
              }}
            >
              <p>Home</p>
            </div>
            <p className="text-gray-200 text-base italic font-bold">
              Ismail Ahammed Roman
            </p>
          </div>


      
          {/* Main content */}
          <div className="w-full flex flex-col  items-center gap-10">
        
            {/* Images */}
            <div className="flex justify-center items-center gap-4">
            <motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ duration: 0.6, delay: 1.5, ease: 'easeInOut' }}
  style={{ originX: 0 }}
  className="w-16 h-48 overflow-hidden"
>
  <img
    src={ismail1}
    alt="Portrait of Ismail"
    className="w-full h-full object-cover object-[5%] scale-100"
  />
</motion.div>


              <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.4, ease: 'easeInOut' }}
              style={{ originX: 0 }}
           className="w-20 h-56 overflow-hidden">
                <img
                  src={ismail1}
                  alt="Portrait of Ismail - left"
                  className="w-full h-full object-cover object-[11%] scale-150"
                />
              </motion.div>

              <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: 'easeInOut' }}
              className="w-44 h-72 overflow-hidden rounded shadow-lg">
                <img
                  src={ismail1}
                  alt="Portrait of Ismail - center"
                  className="w-full h-full object-cover object-center scale-[1.2]"
                />
              </motion.div>

              <motion.div 
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 0.6, delay: 1.4, ease: 'easeInOut' }}
                 style={{ originX: 1}}
                 className="w-20 h-56 overflow-hidden">
                <img
                  src={ismail1}
                  alt="Portrait of Ismail - right"
                  className="w-full h-full object-cover object-[88%] opacity-80 scale-150"
                />              </motion.div>

              <motion.div
              
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.5, ease: 'easeInOut' }}
              style={{ originX: 1 }}
              className="w-16 h-48 overflow-hidden">
                <img
                  src={ismail1}
                  alt="Portrait of Ismail - far right"
                  className="w-full h-full object-cover object-[100%] opacity-70 scale-150"
                />
              </motion.div>
            </div>

            {/* Text */}
            <div className="ml-0 lg:ml-8 max-w-lg text-left">
              <h1 className="text-4xl font-bold mb-2">Md. Ismail Ahammed</h1>
              <p className="text-xl mb-6 font-mono tracking-tighter ">
                <TypewriterRoles />
              </p>

              <ul className="space-y-2 text-gray-300 tracking-tighter font-medium">
                <li>
                  <strong className="text-yellow-400">Address:</strong> Mirpur,
                  Dhaka, Bangladesh
                </li>
                <li>
                  <strong className="text-yellow-400">E-mail:</strong>{' '}
                  ismailahmmedroman@gmail.com
                </li>
                <li>
                  <strong className="text-yellow-400">Freelance:</strong>{' '}
                  Available
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};
