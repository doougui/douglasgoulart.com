import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'block' });

export default {
  grid: {
    container: '94rem',
    gutter: '4rem',
  },
  border: {
    radius: '0.4rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  font: {
    family: inter.style.fontFamily,
    weights: {
      light: 300,
      normal: 400,
      bold: 600,
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.4rem',
      xxlarge: '3.2rem',
      huge: '5.2rem',
    },
    heights: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.4rem',
      xlarge: '3rem',
      xxlarge: '4.2rem',
      huge: '6rem',
    },
  },
} as const;
