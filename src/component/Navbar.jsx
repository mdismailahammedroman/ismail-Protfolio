import React from "react";
import ismail from "../assets/ismail2.jpg";
import { Link } from "react-router";
import SocialLinks from "./SocialLinks";

export const Navbar = ({ open = false }) => {
  return (
    <aside
      className={`sidebar w-72 bg-white text-gray-900 flex flex-col items-center py-8 shadow-lg fixed left-0 top-0 h-full z-20 transition-transform duration-300 md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      } md:block`}
    >
    
      <div className="flex flex-col items-center gap-2 justify-center mx-auto">
        {" "}
        <div className="mt-10 border-2 border-gray-500">
          {" "}
          <img
            src={ismail}
            alt="Profile"
            className="h-28 w-28 rounded-full scale-150"
          />{" "}
        </div>{" "}
        <h1 className="text-xl font-bold mt-10">Md. Ismail Ahammed</h1>{" "}
        <p className="text-sm text-gray-500 mb-6">Full Stack Web Developer</p>{" "}
      </div>
      <nav class="w-full">
        <ul class="space-y-2 text-center">
          <Link
            to=""
            class="tracking-wide nav-link block border-b border-t-2 border-gray-200 py-2 border-l-6 border-r-4 hover:border-r-yellow-400 hover:border-l-yellow-400 transition active"
          >
            Home
          </Link>
          <Link
            to="/about"
            class=" tracking-wide nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-4 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
          >
            About me
          </Link>
          <Link
            to="/resume"
            class="tracking-wide nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-4 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
          >
            Resume
          </Link>
          <Link
            to="/portfolio"
            class="tracking-wide nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-4 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            class="tracking-wide nav-link block py-2 border-b-2 border-t-2 border-gray-200 border-l-6 border-r-4 hover:border-r-yellow-400 hover:border-l-yellow-400 transition"
          >
            Contact
          </Link>
        </ul>
      </nav>

      <div class="mt-20 flex space-x-4 text-gray-500 items-center justify-center ">
       <SocialLinks/>
      </div>
    </aside>
  );
};
