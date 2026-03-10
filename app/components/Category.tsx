export interface SkillCategory {
  title: string
  skills: string[]
}

export default function SkillCategory({ category }: { category: SkillCategory }) {
  return (
    <div>
      <h3 className="text-xl font-medium mb-6">{category.title}</h3>
      <ul>
        {category.skills.map((skill) => (
          <li key={skill} className="py-3 text-gray-600 border-b border-gray-100">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}