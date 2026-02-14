'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  icon: string
  gradient: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Redesign',
    description: 'Complete visual identity refresh for a tech startup',
    icon: '🎨',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Mobile App',
    description: 'iOS app design and development for fitness tracking',
    icon: '📱',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Full-stack development of a modern shopping experience',
    icon: '🌐',
    gradient: 'from-cyan-500 to-blue-600',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Selected Work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-4/3 mb-6">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 400 470"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 40 0 
               L 360 0 
               Q 400 0 400 40 
               L 400 420 
               L 350 470 
               L 300 470 
               L 40 470 
               Q 0 470 0 430 
               L 0 40 
               Q 0 0 40 0 Z"
            stroke={isHovered ? '#a3e635' : '#525252'}
            strokeWidth="2"
            fill="none"
            className="transition-colors duration-300"
          />
        </svg>
        <div
          className={`absolute inset-0 bg-linear-to-br ${project.gradient}
          flex items-center justify-center text-6xl
          transition-all duration-300
          ${isHovered ? "scale-[0.98]" : ""}
        `}
          style={{
            clipPath: `path('M 40 0 L 360 0 Q 400 0 400 40 L 400 420 L 350 470 L 300 470 L 40 470 Q 0 470 0 430 L 0 40 Q 0 0 40 0 Z')`
          }}
        >
          {project.icon}
        </div>
      </div>

      <h3 className="text-2xl font-medium mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600">
        {project.description}
      </p>
    </div>
  )
}
