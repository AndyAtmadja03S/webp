'use client'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C', 'Javascript', 'Typescript', 'Python', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks',
    skills: ['Next.js', 'React.js', 'React Native', 'Tailwind CSS', 'Slim', 'Laravel', 'tRPC'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Prisma ORM'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Git', 'Github Actions', 'Vercel', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Skills & Tools
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category }: { category: SkillCategory }) {
  return (
    <div>
      <h3 className="text-xl font-medium mb-6">{category.title}</h3>
      <ul className="space-y-0">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="py-3 text-gray-600 border-b border-gray-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}