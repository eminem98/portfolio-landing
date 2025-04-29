'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-4 overflow-hidden">
      {/* Background con effetto parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-light to-white dark:from-dark dark:to-slate-900"
          style={{
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(55, 155, 230, 0.03) 0%, rgba(0, 0, 0, 0) 90%)'
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-bg w-full h-full" />
        </div>

        {/* Particle effect */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-brand/5 blur-3xl"
          animate={{
            x: mousePosition.x / 20,
            y: mousePosition.y / 20,
          }}
          transition={{ type: 'spring', damping: 50 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-block mb-2 px-4 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium"
        >
          Ingegnere Informatico
        </motion.div>
        
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-base mb-4"
        >
          Ciao, sono <span className="text-brand">Eugenio</span> 
          <span className="inline-block animate-wave origin-bottom-right">👋</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="h-12 mb-6">
          <TypeAnimation
            sequence={[
              'Sviluppo siti web moderni', 
              2000,
              'Creo UI/UX responsivi', 
              2000,
              'Realizzo esperienze digitali', 
              2000
            ]}
            wrapper="span"
            speed={50}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300"
        >
          Trasformo idee in esperienze digitali eleganti e funzionali.
          Questo è il mio portfolio, dove racconto chi sono e cosa faccio.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:shadow-brand/20"
          >
            Scopri i miei progetti
          </a>
          <a 
            href="#about" 
            className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg hover:border-brand hover:text-brand transition-all"
          >
            Chi sono
          </a>
        </motion.div>
        
        {/* Indicatore di scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-24"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-gray-500 mb-2">Scorri verso il basso</span>
            <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-brand rounded-full mt-1"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Design element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M38.6,-64.9C50.3,-56.3,60.5,-46.3,65.4,-34.1C70.3,-21.8,69.9,-7.4,67.9,6.5C65.9,20.3,62.4,33.7,54,43.9C45.6,54,32.3,61,18.5,64.9C4.7,68.9,-9.7,69.8,-22.9,66.3C-36.1,62.8,-48.1,54.9,-59.5,44.1C-71,33.3,-81.8,19.6,-84.5,4.5C-87.1,-10.7,-81.6,-27.2,-71.9,-40.2C-62.3,-53.2,-48.6,-62.5,-34.6,-69.7C-20.6,-76.9,-6.3,-81.9,6.9,-82.4C20.2,-82.9,26.9,-73.5,38.6,-64.9Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  )
}

// Aggiungi questi stili al tuo globals.css
/* 
.grid-bg {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(20deg); }
}

.animate-wave {
  animation: wave 2s infinite;
}
*/