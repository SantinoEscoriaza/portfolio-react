
import { extendTheme } from '@chakra-ui/react';

// Colocar y forzar por defecto el modo claro
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Mediaquerys para responsive desing
const breakpoints = {
  base: '0px',
  sm: '320px',
  "mid":'480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1920px'
}

// Estilos globales / reutilizables
const styles = {
  global: {
    '*':{
      fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    },
    html:{
      scrollBehavior:'smooth'
    },
    h2: {
      width: '100%',
      m: '40px 0px',
      fontSize: '48px',
      fontWeight: 500,
      textAlign: 'center'
    },
    '.defaultText': {
        color: '#59514f',
        mb: '60px',
        fontSize: '18px',
        fontWeight: '500'
    },
    '#redButton':{
        p: '24px 60px',
        border: '1px solid #f92139',
        borderRadius: '2px',
        color: '#ffffff',
        bgColor: '#f92139',
        fontSize: '16px',
        fontWeight: '500',
        transition: '0.3s',
        _hover:{
          color: '#f92139',
          bgColor: '#ffffff',
          cursor: 'pointer'
        }
    },
    '.icons':{
      w: '100%',
      p: '30px 0px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      gap: '30px',
    },
    '.icons > a':{
      color: '#000000',
      fontSize: '20px',
      textDecoration: 'none',
      transition: '0.3s',
      _hover:{
        color:'#f92139'
      }
    }
}}

const theme = extendTheme({ config, breakpoints, styles });

export default theme;
