import Link from "next/link"

export interface Project {
  id: number
  title: string
  description: string
  link: string
  img: string
  bg: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link} target="_blank" className="group block">
      <div
        className="relative w-full h-112.5 rounded-2xl overflow-hidden
        shadow-md transition-all duration-300
        group-hover:-translate-y-2 group-hover:shadow-xl
        bg-white flex items-center justify-center"
      >
        <img
          src={project.bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <img
          src={project.img}
          alt={project.title}
          className="relative w-32 h-32 object-contain"
        />
      </div>

      <h3 className="text-2xl font-medium mt-6 mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </Link>
  )
}