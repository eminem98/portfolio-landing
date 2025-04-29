'use client'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#about', label: 'Chi sono' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#concepts', label: 'Design' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Gestione dello scroll e della sezione attiva
  useEffect(() => {
    const handleScroll = () => {
      // Imposta scrolled se la pagina è scesa più di 10px
      setScrolled(window.scrollY > 10)
      
      // Trova quale sezione è attualmente visibile
      const sections = navItems.map(item => item.href.substring(1))
      
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      setActiveSection(current || '')
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Chiama la funzione una volta all'inizio per impostare lo stato iniziale
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Chiudi il menu mobile quando un link viene cliccato oppure quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = () => {
      if (open) setOpen(false)
    }
    
    // Aggiungi un event listener al body per chiudere il menu quando si clicca altrove
    document.body.addEventListener('click', handleClickOutside)
    
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  // Impedisci che i clic all'interno del menu causino la chiusura
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Gestisci il clic sul pulsante del menu
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(!open)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={clsx(
        'sticky top-0 z-50 backdrop-blur transition-all duration-300',
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a 
          href="#" 
          className="group flex items-center text-2xl font-bold text-slate-900 dark:text-white"
          aria-label="Eugenio Carramusa - Home"
        >
          <span className="mr-1">{'<'}</span>
          Eugenio
          <span className="text-brand transition-all group-hover:translate-x-1">Carramusa</span>
          <span className="ml-1">{'>'}</span>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={clsx(
                "relative px-2 py-1 transition-all duration-300",
                activeSection === href.substring(1)
                  ? "text-brand"
                  : "hover:text-brand"
              )}
            >
              {label}
              {activeSection === href.substring(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-brand/10 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
          
          <motion.a
            href="mailto:info@eugeniocarramusa.it"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-4 py-2 bg-brand text-white text-sm rounded-lg shadow-md hover:shadow-lg hover:shadow-brand/20 transition-all duration-300"
          >
            Contattami
          </motion.a>
        </nav>

        {/* Pulsante menu mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-gray-100 dark:border-gray-800 px-6 py-4 space-y-4"
            onClick={handleMenuClick}
          >
            {navItems.map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={clsx(
                  "block font-medium text-base py-2 border-l-2 pl-3 transition-all",
                  activeSection === href.substring(1)
                    ? "border-brand text-brand"
                    : "border-transparent hover:border-brand/50 hover:text-brand"
                )}
              >
                {label}
              </motion.a>
            ))}
            
            <motion.a
              href="mailto:info@eugeniocarramusa.it"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block w-full text-center mt-6 px-4 py-3 bg-brand text-white rounded-lg shadow-md"
            >
              Contattami
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}