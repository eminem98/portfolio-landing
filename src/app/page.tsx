import Header   from '@/components/Header'
import Footer   from '@/components/Footer'
import Hero     from '@/sections/Hero'
import About    from '@/sections/About'
import Projects from '@/sections/Projects'
import Concepts from '@/sections/Concepts'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Concepts />
      <Footer />
    </main>
  )
}
