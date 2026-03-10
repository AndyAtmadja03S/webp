'use client'

import Link from 'next/link'

interface ContactLink {
  label: string
  href: string
}

const contactLinks: ContactLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/feed/' },
  { label: 'GitHub', href: 'https://github.com/AndyAtmadja03S' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
          Let's work together
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          Interested in any opportunites, contacts below
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg hover:font-bold hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}