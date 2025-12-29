import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <>
      <div className="bg-pattern" />
      <Header />
      <main>
        <About />
        <Services />
        <Experience />
        <CTA onContactClick={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default App

