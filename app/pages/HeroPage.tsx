'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center px-6">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="/avatar.jpg"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Andy Atmadja
          </h1>
          
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Computer Science Student
          </p>
          
          <Link
            href="#work"
            className={`inline-block px-10 py-4 bg-black text-white rounded-full text-sm tracking-wide hover:scale-105 hover:shadow-2xl transition-all duration-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            View My Projects
          </Link>
        </div>
      </div>

      <div
        className="hidden md:block md:absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{
          animation: 'bounce 0.8s infinite',
        }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
