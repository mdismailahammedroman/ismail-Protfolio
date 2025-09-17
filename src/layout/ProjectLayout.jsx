/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router';

export default function ProjectLayout() {
  return (
  <div className="md:ml-64 flex-1">
      <section className="min-h-screen px-4 md:px-10 py-8 bg-white text-gray-800">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 ">
          <div
            className="text-white font-bold text-2xl px-6 h-20 p-3 inline-block lg:-ml-14 w-40"
            style={{
              clipPath:
              "polygon(0 0, 100% 0%, 100% 73%, 12% 73%, 12% 100%, 0 73%, 0 14%)",
              backgroundColor: "#facc15",
            }}
          >
            <p>Portfolio</p>
          </div>
          <p className="text-gray-400 text-base italic font-bold">
            My Best Works
          </p>
        </div>


        {/* Timeline with Animated Cards */}
        <section className="relative px-6 py-12">
        <nav className="flex gap-2 mb-6  pb-2 justify-center">
        <NavLink 
          to="/portfolio/all" 
          className={({ isActive }) => isActive ? "font-medium text-white bg-yellow-500 p-3 w-20 text-center" : "text-gray-500 transition-all duration-300 ease-in-out  hover:bg-gray-100 p-3 w-20 text-center"}
        >
          All
        </NavLink>
        <NavLink
          to="/portfolio/frontend"
          className={({ isActive }) => isActive ? "font-medium text-white bg-yellow-500 p-3 w-52 text-center" : "text-gray-500 transition-all duration-300 ease-in-out  hover:bg-gray-100 p-3 w-52 text-center"}
        >
          Front-End Development
        </NavLink>
        <NavLink
          to="/portfolio/backend"
          className={({ isActive }) => isActive ? "font-medium text-white bg-yellow-500 p-3 w-52 text-center" : "text-gray-500 transition-all duration-300 ease-in-out  hover:bg-gray-100 p-3 w-52 text-center"}
        >
          Back-End Development
        </NavLink>
      </nav>
      <Outlet />
          
        </section>
      </section>
    </div>
  );
}
