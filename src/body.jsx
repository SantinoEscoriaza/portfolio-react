import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './normalize.css'
import Header from './Component/Header/Header.jsx'
import Main from './Component/Main/Main.jsx'
import Footer from './Component/Footer/Footer.jsx'
import theme from './assets/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>,
)
