'use client'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Design',
    skills: ['UI/UX Design', 'Figma & Sketch', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Development',
    skills: ['React & Next.js', 'JavaScript/TypeScript', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Other',
    skills: ['Git & GitHub', 'Responsive Design', 'API Integration', 'Agile Workflow'],
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