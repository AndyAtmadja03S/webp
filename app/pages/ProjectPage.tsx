'use client'

import ProjectCard from "@/app/components/ProjectCard"
import projects from "@/app/data/projects.json"

interface Project {
  id: number
  title: string
  description: string
  link: string
  img: string
  bg: string
}


export default function Project() {
  return (
    <div id="work" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Featured Projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}