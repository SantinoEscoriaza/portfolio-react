import React from 'react'
import ReactDOM from 'react-dom/client'
import './normalize.css'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Main from './Component/Main/Main.jsx'
import Footer from './Component/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
