import React from "react";
import ismail from "../assets/ismail2.jpg";
import { Link } from "react-router";
import SocialLinks from "./SocialLinks";

export const Sidebar = ({ open = false }) => {
  return (
<aside
  className={`sidebar w-72 bg-white text-gray-900 flex flex-col justify-between py-8 shadow-lg fixed left-0 top-0 h-full z-20 transition-transform duration-300 md:translate-x-0 ${
    open ? "translate-x-0" : "-translate-x-full"
  } md:block`}
>
  {/* Top section */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center gap-2 justify-center mx-auto">
      <div className="mt-10 border-2 border-gray-500">
        <img
          src={ismail}
          alt="Md. Ismail Ahammed Roman - Full Stack Developer"
          className="h-28 w-28 rounded-full scale-150"
        />
      </div>
      <h1 className="text-xl font-bold mt-10 text-gray-700">
        Md. Ismail Ahammed
      </h1>
      <p className="text-sm text-gray-500 mb-6">Full Stack Web Developer</p>
    </div>

    {/* Navigation */}
    <nav className="w-full mt-6">
      <ul className="space-y-2 text-center">
        <Link
          to="/"
          className="font-medium text-gray-800 nav-link block border-b border-t-2 border-gray-200 py-2 border-l-6 border-r-6 hover:border-r-yellow-400 hover:border-l-yellow-400 transition active"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-medium text-gray-800 nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-6 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
        >
          About me
        </Link>
        <Link
          to="/resume"
          className="font-medium text-gray-800 nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-6 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
        >
          Resume
        </Link>
        <Link
          to="/Portfolio/all"
          className="font-medium text-gray-800 nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-6 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="font-medium text-gray-800 nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-6 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
        >
          Contact
        </Link>
      </ul>
    </nav>
  </div>

  {/* Bottom Social Links */}
  <div className=" text-gray-500 mt-50 ">
    <SocialLinks />
  </div>
</aside>

  )
}
