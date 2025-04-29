'use client'
import { motion } from 'framer-motion'
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-light dark:bg-slate-900">
      <h2 className="text-3xl font-semibold mb-12 text-center text-brand">I miei progetti</h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}