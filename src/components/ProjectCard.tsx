"use client"

import { Project } from '@/data/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = { project: Project }

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 12px 20px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-xl overflow-hidden bg-white dark:bg-dark border border-gray-200 dark:border-slate-700"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={640}
        height={360}
        className="w-full object-cover h-48"
        priority
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-base">{project.title}</h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 text-brand hover:text-brand-dark transition"
        >
          Visita il sito →
        </a>
      </div>
    </motion.article>
  )
}