export type Project = {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  link: string
  technologies?: string[]
  category?: string
  isNew?: boolean
  details?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Studio Medico Teresi',
    description:
      'Sviluppo su misura di un sito vetrina per uno studio di medicina estetica, ottimizzato per SEO e performance.',
    longDescription: 'Progettazione e sviluppo completo di un sito web moderno per lo Studio Medico del Dr. Angelo Teresi. Il sito è stato ottimizzato per i motori di ricerca e offre una user experience fluida e intuitiva. Particolare attenzione è stata dedicata alla velocità di caricamento e alla responsività su dispositivi mobili.',
    image: '/website/teresi.png',
    link: 'https://www.drangeloteresi.com/',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    isNew: true,
    details: true
  },
  {
    id: 2,
    title: 'Airam Apartments',
    description:
      'Landing page responsive per struttura ricettiva, con focus su prenotazioni e presentazione dei servizi.',
    longDescription: 'Design e sviluppo di una landing page per Airam Apartments, con un sistema di prenotazione integrato e una galleria interattiva per mostrare gli appartamenti disponibili. Il sito è completamente responsive e ottimizzato per una rapida conversione degli utenti in clienti.',
    image: '/website/airam.png',
    link: 'https://www.airamapartment.it/',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'web',
    details: true
  },
]

export default projects