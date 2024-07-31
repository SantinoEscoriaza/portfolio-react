
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
      scrollBehavior:'smooth',
      'scroll-padding-top':'60px'
    },
    h2: {
      width: '100%',
      m: '40px 0px',
      fontSize: {base:'36px',mid:'48px', '2xl':'60px', '3xl':'72px'},
      fontWeight: 500,
      textAlign: 'center'
    },
    '.defaultText': {
        color: '#59514f',
        mb: '60px',
        fontSize: {base:'16px', mid:'18px', '2xl':'26px', '3xl':'34px'},
        fontWeight: '500'
    },
    '#redButton':{
        p: {base:'20px 40px', mid:'24px 60px', '2xl':'32px 60px'},
        border: '1px solid #f92139',
        borderRadius: '2px',
        color: '#ffffff',
        bgColor: '#f92139',
        fontSize: {base:'14px', mid:'16px', '2xl':'22px', '3xl':'28px'},
        fontWeight: '500',
        transition: '0.3s',
        _hover:{
          color: '#f92139',
          bgColor: '#ffffff',
          cursor: 'pointer'
        }
    },
}}

const theme = extendTheme({ config, breakpoints, styles });

export default theme;
