'use client'

import projects from "@/app/data/projects.json"
import Navbar from "@/app/components/Navbar"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  link: string
  img: string
  bg: string
}

export default function FullProjectPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          All Projects
        </p>
        <h1 className="text-4xl font-bold text-black mb-4">
          Everything I've Built
        </h1>

        <ul className="divide-y divide-neutral-200">
          {(projects as Project[]).map((project, index) => (
            <li key={project.id}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-8 py-10 hover:opacity-70 transition-opacity duration-200"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-xs text-gray-300 mt-1 w-5 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-black mb-2 group-hover:underline underline-offset-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                <span className="text-gray-300 text-xl mt-1 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}