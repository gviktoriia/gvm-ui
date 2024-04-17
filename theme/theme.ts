'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { css } from '@emotion/react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#2F27CE',
      },
      secondary: {
        main: '#DDDBFF',
      },
      mode: 'light',
    },
});
  
export const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#3A31D8',
      },
      secondary: {
        main: '#020024',
      },
      mode: 'dark',
    },
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});


export const globalStyles = css`
  :root {
    body {
      background-color: #FBFBFE;
      color: #050316;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #010104;
      color: #EAE9FC;
    }
  }
`;

export default theme;