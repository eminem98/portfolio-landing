'use client'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Tipizzazioni per i concept designs
interface ConceptDesign {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

// Concept designs data
const conceptDesigns: ConceptDesign[] = [
  {
    id: 1,
    title: 'Dashboard UI Concept',
    description: "UI minimalista per un'app di gestione dati con funzionalità avanzate di visualizzazione.",
    image: '/designs/concept-1.png', // Placeholder - sostituire con immagini reali
    tags: ['UI/UX', 'Dashboard', 'Data Visualization']
  },
  {
    id: 2,
    title: 'E-commerce Mobile App',
    description: "Interfaccia utente innovativa per un'esperienza di shopping intuitiva su dispositivi mobili.",
    image: '/designs/concept-2.png', // Placeholder
    tags: ['Mobile', 'E-commerce', 'UX']
  },
  {
    id: 3,
    title: 'Personal Finance Tracker',
    description: "Concept di un'app per il monitoraggio delle finanze personali con visualizzazioni interattive.",
    image: '/designs/concept-3.png', // Placeholder
    tags: ['Finance', 'Dashboard', 'Charts']
  },
]

export default function Concepts() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  // State for active concept
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <section 
      id="concepts" 
      ref={ref}
      className="py-24 px-4 bg-white dark:bg-slate-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            style={{ y }}
            className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/50 dark:bg-slate-700/30 rounded-full blur-3xl"
          />
        </div>
      
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand bg-brand/10 rounded-full mb-4">
            Design
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Concept & <span className="text-brand">Design</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Esplora le mie idee creative, mockup e prototipi per interfacce web innovative.
          </p>
        </motion.div>
        
        {/* Grid gallery per i concept */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {conceptDesigns.map((concept, index) => (
            <ConceptCard 
              key={concept.id}
              concept={concept}
              index={index}
              setActiveIndex={setActiveIndex}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        
        {/* Add a "Coming Soon" card at the end */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600"
        >
          <h3 className="text-xl font-semibold mb-3">Nuovi concept in arrivo!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Sto lavorando a nuovi design innovativi. Torna presto per scoprire nuovi concept e prototipi.
          </p>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block mt-2 text-brand hover:text-brand-dark transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1">
              <span>Seguimi per aggiornamenti</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Tipizzazioni per props del ConceptCard
interface ConceptCardProps {
  concept: ConceptDesign;
  index: number;
  setActiveIndex: (index: number) => void;
  isActive: boolean;
}

// Componente per le card dei concept
function ConceptCard({ concept, index, setActiveIndex }: ConceptCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -8,
        transition: { type: 'spring', stiffness: 300, damping: 20 } 
      }}
      onHoverStart={() => {
        setIsHovered(true)
        setActiveIndex(index)
      }}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-600"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Placeholder for concept image */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center">
          {/* In a real implementation, use Image component with real images */}
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            Concept {index + 1}
          </span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {concept.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10
                }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="px-2 py-1 text-xs bg-white/90 text-gray-800 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:text-brand transition-colors">
          {concept.title}
        </h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
          {concept.description}
        </p>
        
        {/* Preview button */}
        <motion.div 
          className="mt-4 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-brand-dark transition-colors">
            <span>Anteprima</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}