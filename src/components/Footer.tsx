"use client"
export default function Footer() {
  return (
    <footer className="bg-dark py-6 text-center text-sm text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Eugenio Carramusa · Ingegnere Informatico · Tutti i
        diritti riservati.
      </p>
    </footer>
  )
}