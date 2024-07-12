import React from 'react'
import ReactDOM from 'react-dom/client'
import './normalize.css'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
import About from './Component/About/About.jsx'
import Skills from './Component/Skills/Skills.jsx'
import Proyects from './Component/Proyects/Proyects.jsx'
import Testimonios from './Component/Testimonios/Testimonios.jsx'
import Contact from './Component/Contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Proyects />
    <Testimonios />
    <Contact />
  </React.StrictMode>,
)
