'use client'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          About
        </p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          Building meaningful products through design & code
        </h2>
        
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            I'm a designer and developer based in San Francisco, passionate about creating 
            intuitive digital experiences that solve real problems. With 5+ years of experience, 
            I bridge the gap between design and development.
          </p>
          
          <p>
            Currently, I work with startups and established companies to bring their ideas to life, 
            focusing on clean design, smooth interactions, and thoughtful user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}