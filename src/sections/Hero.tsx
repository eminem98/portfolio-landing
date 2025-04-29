'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-gradient-to-b from-light to-white dark:from-dark dark:to-slate-800 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-base"
      >
        Ciao, sono <span className="text-brand">Eugenio</span> 👋
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-xl mt-4 text-lg text-gray-700 dark:text-gray-300"
      >
        Creo esperienze digitali eleganti e funzionali. Questo è il mio portfolio, dove racconto
        chi sono e cosa faccio.
      </motion.p>
    </section>
  )
}