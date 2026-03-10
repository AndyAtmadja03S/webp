'use client'

export default function Navbar() {
  const navItemClass =
    "text-md text-gray-700 hover:text-black transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-md z-50"

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="fixed top-0 w-full z-50 duration-300 py-6 bg-white/80 backdrop-blur-md">
      <div className="mx-auto px-6 flex flex-row justify-between items-center">
        
        <div
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer duration-300 hover:scale-105"
        >
          <p className="text-xl font-bold tracking-tight">
            A.A
          </p>
        </div>
        
        <div className="hidden md:flex gap-8">
          <div onClick={() => scrollToSection('about')} className={navItemClass}>About</div>
          <div onClick={() => scrollToSection('work')} className={navItemClass}>Projects</div>
          <div onClick={() => scrollToSection('skills')} className={navItemClass}>Skills</div>
          <div onClick={() => scrollToSection('contact')} className={navItemClass}>Contact</div>
        </div>
      </div>
    </div>
  );
}