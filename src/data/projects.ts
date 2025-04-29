export type Project = {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Studio Medico Teresi',
    description:
      'Sviluppo su misura di un sito vetrina per uno studio di medicina estetica, ottimizzato per SEO e performance.',
    image: '/website/teresi.png',
    link: 'https://www.drangeloteresi.com/',
  },
  {
    id: 2,
    title: 'Airam Apartments',
    description:
      'Landing page responsive per struttura ricettiva, con focus su prenotazioni e presentazione dei servizi.',
    image: '/website/airam.png',
    link: 'https://www.airamapartment.it/',
  },
]

export default projects