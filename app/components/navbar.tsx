'use client'

import MenuIcon from "./icons/MenuIcon";

export default function NavBar() {
  const navItemClass =
    "text-md text-gray-700 hover:text-black transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-md z-50"

  return (
    <div className="fixed top-0 w-full z-50 transition-all duration-300 py-6 bg-white/80 backdrop-blur-md">
      <div className="mx-auto px-6 flex flex-row justify-between items-center">
        
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:text-black"
        >
          <p className="text-xl font-semibold tracking-tight">
            A.A
          </p>
        </div>
        
        <div className="hidden md:flex gap-8">
          <div className={navItemClass}>About</div>
          <div className={navItemClass}>Work</div>
          <div className={navItemClass}>Skills</div>
          <div className={navItemClass}>Contact</div>
        </div>

        <button
          className="md:hidden text-gray-700 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-black hover:shadow-md"
          aria-label="Menu"
        >
          <MenuIcon />
        </button>

      </div>
    </div>
  );
}
