import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenDevPanel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDevPanel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-dark-bg/85 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-black text-lg tracking-tight text-white group-hover:text-purple-400 transition-colors">
            ISMAIL<span className="text-cyan-400">.AHAMMED</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-semibold uppercase tracking-wider relative py-1 transition-colors ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenDevPanel}
            title="Configure Project Links"
            className="p-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:text-white"
          >
            <Settings className="w-4 h-4 animate-spin-slow" />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 py-6 px-6 glass border-b border-white/10 flex flex-col gap-4 animate-in slide-in-from-top duration-200 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-purple-500/10 text-purple-300 border-l-2 border-purple-500'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
