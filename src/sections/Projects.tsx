'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

// Estrai le categorie dai progetti
const categories = ['all', ...Array.from(new Set(projects.map(p => p.category || '')))].filter(Boolean)

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand bg-brand/10 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            I miei <span className="text-brand">progetti</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Esplora i progetti web che ho realizzato, con focus su design, usabilità e performance.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <TabButton 
              key={category}
              active={activeTab === category} 
              onClick={() => setActiveTab(category)}
            >
              {category === 'all' ? 'Tutti' : category}
            </TabButton>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 lg:gap-12 md:grid-cols-2"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 py-16 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Nessun progetto trovato in questa categoria.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
            <h3 className="font-bold text-2xl mb-4">Hai un progetto in mente?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sono disponibile per nuove collaborazioni. Discutiamo insieme del tuo progetto!
            </p>
            <motion.a
              href="mailto:info@eugeniocarramusa.it"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition-all shadow-md hover:shadow-xl hover:shadow-brand/20"
            >
              Contattami
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Component for filter tabs
interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${active 
          ? "bg-brand text-white shadow-md shadow-brand/20" 
          : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"}
      `}
    >
      {children}
    </button>
  )
}