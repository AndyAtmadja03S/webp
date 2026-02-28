'use client'

import { useEffect, useState } from 'react'
import Arrow from '../components/icons/ArrowIcon'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
        </div>

        <div className="text-center md:text-left">
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-light mb-6 transition-all duration-1000 ${
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
            Computer Science Student @ UNSW
          </p>
          
          <button
            onClick={() => {
              document.getElementById('work')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
            className={`inline-block px-10 py-4 bg-black text-white rounded-full text-sm
              cursor-pointer
              transition-all duration-1000 delay-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-105
              ${mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'}
            `}
          >
            View My Projects
          </button>
        </div>
      </div>

      <div
        className={`hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2
          transition-all duration-1000 delay-1000
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <Arrow className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  )
}
