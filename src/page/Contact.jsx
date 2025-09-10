/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import { FaRegCheckCircle } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="md:ml-64 flex-1 font-roboto">
      <section className="min-h-screen px-4 md:px-10 py-8 bg-white text-gray-800">
        {/* Heading */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            className="text-white font-bold text-2xl px-6 h-18 p-3 inline-block lg:-ml-14"
            style={{
              clipPath:
                "polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p>Contact</p>
          </div>
          <p className="text-gray-400 text-base italic font-bold">
            Get in Touch
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1  p-6 md:p-10"
          >
            <h1 className="underline decoration-amber-600 tracking-tighter text-gray-500 font-bold text-2xl mb-4">
              Get In Touch
            </h1>

            <p className="text-sm text-gray-400 font-medium mb-6">
              Feel free to ask me any questions. I can help you in your project
              from UI mockups, back-end and front-end development to fixing
              design bugs and configuring deployment environments.
            </p>

            <div className="flex items-start gap-4 mb-4">
              <LuMapPin className="text-2xl text-gray-600 mt-1" />
              <p className="text-gray-600 font-medium">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <IoMailOutline className="text-2xl text-gray-600 mt-1" />
              <p className="text-cyan-600 font-medium">
                ismailahmmedroman@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <IoCallOutline className="text-2xl text-gray-600 mt-1" />
              <p className="text-gray-600 font-medium">01722126444</p>
            </div>
            <div className="flex items-start gap-4">
              <FaRegCheckCircle className="text-2xl text-green-600 mt-1" />
              <p className="text-gray-600 font-medium">Freelance Available</p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1  p-6 md:p-10"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h2>

            <form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-800 mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
