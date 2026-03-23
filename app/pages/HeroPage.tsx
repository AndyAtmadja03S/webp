'use client'

import { useEffect, useState } from 'react'
import Arrow from '../components/icons/ArrowIcon'
import NowPlaying from '../components/NowPlaying'

const fadeUp = (mounted: boolean, delay: string = '') =>
  `transition-all duration-1000 ${delay} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => 
    { 
      setMounted(true) 
    }, [])

  return (
    <div id="hero" className="h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left">
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-light mb-6 ${fadeUp(mounted)}`}>
            Andy Atmadja
          </h1>

          <p className={`text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 ${fadeUp(mounted, 'delay-200')}`}>
            Computer Science Student @ UNSW
          </p>
          <div
            className={`flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 ${fadeUp(mounted, 'delay-500')}`}
          >
            <button
              onClick={() => scrollToSection('work')}
              className={`px-10 py-4 bg-black text-white rounded-full text-sm cursor-pointer
                hover:scale-105 ease-[cubic-bezier(0.22,1,0.36,1)] ${fadeUp(mounted, 'delay-700')}`}
            >
              View My Projects
            </button>

            <div className="md:w-auto">
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
      

      <div className={`hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 ${fadeUp(mounted, 'delay-1000')}`}>
        <Arrow className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  )
}