import skillCategories from "../data/skills.json"
import SkillCategory, { type SkillCategory as SkillCategoryType } from "@/app/components/Category"

export default function Skills() {
  return (
    <div id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Skills & Tools
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {(skillCategories as SkillCategoryType[]).map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}