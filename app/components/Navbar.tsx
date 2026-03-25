'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItemClass =
    "text-md text-gray-700 hover:text-black transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-md z-50"

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      scrollToSection(id)
    }
    // If on another page, the Link href="/#about" will navigate + land on the section
  }

  return (
    <div className="fixed top-0 w-full z-50 duration-300 py-6 bg-white/80 backdrop-blur-md">
      <div className="mx-auto px-6 flex flex-row justify-between items-center">

        <Link href="/#hero" className="cursor-pointer duration-300 hover:scale-105">
          <p className="text-xl font-bold tracking-tight">A.A</p>
        </Link>

        <div className="hidden md:flex gap-8">
          {[
            { label: 'About',    id: 'about'   },
            { label: 'Projects', id: 'work'    },
            { label: 'Skills',   id: 'skills'  },
            { label: 'Contact',  id: 'contact' },
          ].map(({ label, id }) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={navItemClass}
            >
              {label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}