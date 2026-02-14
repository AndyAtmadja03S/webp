'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  year: string
  imageSrc: string
  description: string
  tags?: string[]
}

export default function ProjectCard({
  title,
  year,
  imageSrc,
  description,
  tags = [],
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom border shape container */}
      <div className="relative">
        {/* SVG custom border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 20 10 L 380 10 Q 390 10 390 20 L 390 350 Q 390 360 385 365 L 360 390 Q 355 395 345 395 L 20 395 Q 10 395 10 385 L 10 20 Q 10 10 20 10 Z"
            stroke={isHovered ? '#a3e635' : '#404040'}
            strokeWidth="2"
            fill="none"
            className="transition-all duration-300"
          />
        </svg>

        {/* Card content */}
        <div className="relative bg-black border-2 border-neutral-800 p-8 m-2 overflow-hidden transition-all duration-300 hover:border-neutral-700">
          {/* Image container with clip path */}
          <div className="relative w-full aspect-square mb-6 overflow-hidden bg-neutral-900">
            <div
              className={`absolute inset-0 transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            >
              {/* Placeholder for project image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                <div className="text-6xl">{imageSrc}</div>
              </div>
            </div>

            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-60' : 'opacity-40'
              }`}
            />

            {/* Tags overlay on image */}
            {tags.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black/60 backdrop-blur-sm text-lime-400 text-xs font-medium border border-lime-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom section with title and year */}
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <h3
                className={`text-2xl font-bold text-white mb-2 transition-colors duration-300 ${
                  isHovered ? 'text-lime-400' : 'text-white'
                }`}
              >
                {title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Year badge */}
            <div className="ml-6">
              <span
                className={`text-4xl font-bold transition-colors duration-300 ${
                  isHovered ? 'text-lime-400' : 'text-neutral-600'
                }`}
              >
                {year}
              </span>
            </div>
          </div>

          {/* Bottom corner decoration */}
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <svg
              className="w-full h-full"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 64 64 L 64 32 Q 64 16 48 16 L 16 16"
                stroke={isHovered ? '#a3e635' : '#404040'}
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover effect - glow */}
      <div
        className={`absolute inset-0 -z-10 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(163, 230, 53, 0.3), transparent 70%)',
        }}
      />
    </div>
  )
}