
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
    }
}}

const theme = extendTheme({ config, breakpoints, styles });

export default theme;
