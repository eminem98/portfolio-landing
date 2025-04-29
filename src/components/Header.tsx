'use client'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navItems = [
  { href: '#about', label: 'Chi sono' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#concepts', label: 'Design' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 backdrop-blur transition-all',
        scrolled ? 'bg-white/80 dark:bg-dark/80 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-base">
          Eugenio<span className="text-brand">Carramusa</span>
        </a>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-dark/90 backdrop-blur px-6 pb-4 space-y-2">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block font-medium text-base hover:text-brand"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}