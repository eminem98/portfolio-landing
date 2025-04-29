"use client"

import { useState } from 'react'
import { Project } from '@/data/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

type Props = { project: Project }

export default function ProjectCard({ project }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 h-full"
    >
      {/* Immagine con overlay al passaggio del mouse */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          priority
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Tecnologie utilizzate (tag) */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded-full shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Contenuto della card */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-base mb-2 group-hover:text-brand transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-brand hover:text-brand-dark transition-colors"
          >
            Visita il sito
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </motion.span>
          </a>
          
          {/* Pulsante "Dettagli" per future implementazioni */}
          {project.details && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:border-brand hover:text-brand transition-colors"
            >
              Dettagli
            </motion.button>
          )}
        </div>
      </div>
      
      {/* Badge 'Nuovo' condizionale */}
      {project.isNew && (
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            NUOVO
          </motion.div>
        </div>
      )}
    </motion.article>
  )
}