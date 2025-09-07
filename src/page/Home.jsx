/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

export const Home = () => {

 
  return (
    <div className="min-h-screen flex bg-amber-300">


      <main className="flex-1 ml-0 md:ml-64 p-6">
        <section id="home" className="py-12">Home</section>

        <section id="about" className="py-12 flex justify-center">
          <div className="relative h-40 w-64 overflow-hidden rounded">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scaleX: 0, transformOrigin: '0% 50%', opacity: 1 }}
              animate={{ scaleX: [0, 1, 1, 0], transformOrigin: ['0% 50%', '0% 50%', '50% 50%', '100% 50%'], opacity: [1, 1, 1, 0] }}
              transition={{ duration: 1.2, ease: 'easeOut', times: [0, 0.4, 0.6, 1] }}
            >
              <div className="px-4 py-2 rounded bg-black text-white">center</div>
            </motion.div>

            <motion.img
              src=""
              alt="placeholder"
              className="absolute inset-0 h-24 w-48 bg-red-400"
              initial={{ scaleX: 0, transformOrigin: '0% 50%', opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
            />
          </div>
        </section>

        <div className='flex'>
<section id="about" className="py-12 flex justify-center ">
          <div
            className="absolute  h-24 w-48 flex bg-black rounded scale-left-then-right-out"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="text-white m-auto">center</div>
          </div>
        </section>
        <section className="py-6 flex justify-center mt-6">
          <div
            className="h-24 w-48 bg-red-400 rounded overflow-hidden scale-left-in scale-left-in-delay"
            data-aos="fade-up"
          >
           
          </div>
        </section>
</div>
        <section id="resume" className="py-12">Resume</section>
        <section id="portfolio" className="py-12">Portfolio</section>
        <section id="contact" className="py-12">Contact</section>
      </main>
    </div>
  )
}
