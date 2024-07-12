import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Component/Header/Header.jsx'
import './normalize.css'
import './index.css'
import Hero from './Component/Hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>,
)
