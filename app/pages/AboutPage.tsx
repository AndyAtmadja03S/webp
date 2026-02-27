'use client'

import GitHubSection from "./sections/GithubSection"
import LeetcodeSection from "./sections/LeetcodeSection"

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          About
        </p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          Building meaningful products through design & code
        </h2>
        
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
          <p>
            Hi, I'm a Computer Science student based in Sydney, Australia. I'm passionate 
            about building stuff that can actually be used in current modern day problems.
            Outside of building, I love playing sports like soccer, basketball, and padel.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          <GitHubSection>
          </GitHubSection>
          <LeetcodeSection></LeetcodeSection>
        </div>
        
      </div>
    </section>
  )
}