'use client'

import ProjectCard from "@/app/components/ProjectCard"
import projects from "@/app/data/projects.json"
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  title: string
  description: string
  link: string
  img: string
  bg: string
}


export default function Project() {
  const router = useRouter()

  return (
    <div id="work" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Featured Projects
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {(projects as Project[]).slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex flex-col items-center mt-4">
            <button
              onClick={() => router.push('/projects')}
              className={`px-10 py-4 bg-black text-white rounded-full text-sm cursor-pointer
                hover:scale-105 ease-[cubic-bezier(0.22,1,0.36,1)] w-[20%]`}
            >
              View My Projects
            </button>
          </div>
      </div>
    </div>
  )
}