'use client'

import MenuIcon from "./icons/MenuIcon";

export default function NavBar() {
  return (
    <nav 
      className={`fixed top-0 w-full transition-all duration-300 py-6 bg-white/80`}
    >
      <div className="mx-auto px-6 flex flex-row justify-between items-center">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            A.A
          </p>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a 
            href="#about" 
            className="text-md text-gray-700 hover:text-gray-400 transition-colors"
          >
            About
          </a>
          <a 
            href="#work" 
            className="text-md text-gray-700 hover:text-gray-400 transition-colors"
          >
            Work
          </a>
          <a 
            href="#skills" 
            className="text-md text-gray-700 hover:text-gray-400 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-md text-gray-700 hover:text-gray-400 transition-colors"
          >
            Contact
          </a>
        </div>

        <button 
          className="md:hidden text-gray-700"
          aria-label="Menu"
        >
          <MenuIcon></MenuIcon>
        </button>
      </div>
    </nav>
  );
}
