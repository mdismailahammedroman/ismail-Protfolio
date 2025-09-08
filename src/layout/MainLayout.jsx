import React, { useState } from "react";
import { Navbar } from "../component/navbar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="bg-gray-400 gap-3 flex">

<button onClick={() => setMenuOpen(prev => !prev)} className="fixed top-4 left-4 z-30 md:hidden bg-yellow-400 p-2 rounded-lg" aria-label="Toggle menu">
        <i className="fas fa-bars text-gray-900"></i>
        <span className="block w-6 h-0.5 bg-black mb-1" />
        <span className="block w-6 h-0.5 bg-black mb-1" />
        <span className="block w-6 h-0.5 bg-black" />
      </button>

      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/40 z-10 md:hidden"></div>
      )}


      <Navbar open={menuOpen} onLinkClick={() => setMenuOpen(false)} />
     
      <div className="hidden lg:block w-10 min-h-screen"></div>
  <Outlet/>
    </div>
  );
};
