
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

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

const theme = extendTheme({ config, breakpoints });

export default theme;
