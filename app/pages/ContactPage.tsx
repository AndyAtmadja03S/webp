'use client'

import Link from 'next/link'

interface ContactLink {
  label: string
  href: string
}

const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:hello@alexmorgan.com' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
          Let's work together
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg hover:text-purple-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}