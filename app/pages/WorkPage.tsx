'use client'

import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  link: string
  img: string
  bg: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Spotz',
    description: 'UNSW Campus Spots Finder',
    link: 'https://trainee-dragon-25t1.vercel.app/',
    img: 'https://trainee-dragon-25t1.vercel.app/spotz.svg',
    bg: '/spotzz.png'
  },
  {
    id: 2,
    title: 'When2Eat',
    description: 'Timetable Scheduling for Eats around campus',
    link: 'https://github.com/AndyAtmadja03S/trainee-giants-25t2',
    img: '/when2eat.png',
    bg: '/when2eatf.png'
  },
  {
    id: 3,
    title: 'Cotangles',
    description: 'Social timetabling UNSW timetable planner',
    link: 'https://cotangles.onrender.com/',
    img: 'https://cotangles.onrender.com/cotangles_logo.png',
    bg: 'cotangles.png'
  },
]

export default function Work() {
  return (
    <div id="work" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Featured Projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link} target="_blank" className="group block">
      <div className="cursor-pointer">
        <div
          className="relative w-full h-112.5 rounded-2xl overflow-hidden 
          shadow-md transition-all duration-300 
          group-hover:-translate-y-2 group-hover:shadow-xl
          bg-white flex items-center justify-center"
        >

          <img
            src={project.bg}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />

          {/* Foreground logo */}
          <img
            src={project.img}
            alt={project.title}
            className="relative w-32 h-32 object-contain"
          />

        </div>

        <h3 className="text-2xl font-medium mt-6 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600">
          {project.description}
        </p>
      </div>
    </Link>
  )
}