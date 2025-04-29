'use client'
import { motion } from 'framer-motion'
import { CodeBracketIcon, ServerIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Node.js', level: 75 },
]

const services = [
  {
    icon: <CodeBracketIcon className="h-8 w-8 mb-4 text-brand" />,
    title: 'Frontend Development',
    description: "Creazione di interfacce moderne e responsive utilizzando React, Next.js e Tailwind CSS.",
  },
  {
    icon: <ServerIcon className="h-8 w-8 mb-4 text-brand" />,
    title: 'Backend Development',
    description: 'Sviluppo di API robuste e performanti per supportare le applicazioni frontend.',
  },
  {
    icon: <PaintBrushIcon className="h-8 w-8 mb-4 text-brand" />,
    title: 'UI/UX Design',
    description: 'Creazione di esperienze utente intuitive e visivamente accattivanti.',
  },
]

export default function About() {
  // Varianti per animazioni
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
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <section id="about" className="py-24 px-4 bg-light dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand bg-brand/10 rounded-full mb-4">
            Chi sono
          </span>
          <h2 className="text-4xl font-bold mb-4 text-base">
            Ingegnere Informatico Specializzato in Web Development
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Sviluppo soluzioni web moderne e intuitive, con particolare attenzione all'esperienza utente e alle performance.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Sezione Bio */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-base">
              Il mio <span className="text-brand">approccio</span>
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Come ingegnere informatico, applico principi di ingegneria allo sviluppo web, combinando solide basi tecniche con un occhio attento all'estetica e all'esperienza utente.
              </p>
              <p>
                Mi concentro sulla creazione di soluzioni web che non solo funzionano perfettamente, ma che sono anche intuitive, veloci e piacevoli da utilizzare.
              </p>
              <p>
                Ogni progetto è un'opportunità per innovare e per risolvere problemi complessi con soluzioni eleganti e funzionali.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition-all shadow-md hover:shadow-xl hover:shadow-brand/20"
              >
                Scopri i miei progetti
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Sezione Skill */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-base">
              Le mie <span className="text-brand">competenze</span>
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Sezione Servizi */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-12 text-center text-base"
          >
            I miei <span className="text-brand">servizi</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg transition-all"
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}