'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Spotz',
    description: 'UNSW Campus Spots Finder',
  },
  {
    id: 2,
    title: 'When2Eat',
    description: 'Timetable Scheduling for Eats around campus',
  },
  {
    id: 3,
    title: 'Cotangles',
    description: 'Social timetabling UNSW timetable planner',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Selected Work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer">
      <div
        className="relative w-full h-[450px] rounded-2xl overflow-hidden 
        shadow-md transition-all duration-300 
        group-hover:-translate-y-2 group-hover:shadow-xl"
      >
      </div>
      <h3 className="text-2xl font-medium mt-6 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600">
        {project.description}
      </p>
    </div>
  );
}