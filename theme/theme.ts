'use client';
import { PaletteMode } from "@mui/material";
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light', 
    primary: {
      main: '#6342d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#605b71',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#1c1b1e',
      secondary: '#1c1b1e',
    },
    background: {
      default: '#fffbff',
      paper: '#fffbff',
    },
    error: {
      main: '#ba1b1b',
      contrastText: '#ffffff',
    },
    success: {
      main: '#006e10',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0062a2',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#606200',
      contrastText: '#313300',
    },
    divider: '#79757f',
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cdbeff',
      contrastText: '#32009a',
    },
    secondary: {
      main: '#cac3dc',
      contrastText: '#322e41',
    },
    text: {
      primary: '#e6e1e6',
      secondary: '#e6e1e6',
    },
    background: {
      default: '#1c1b1e',
      paper: '#1c1b1e',
    },
    error: {
      main: '#ffb4a9',
      contrastText: '#680003',
    },
    success: {
      main: '#79dd72',
      contrastText: '#003a03',
    },
    info: {
      main: '#99cbff',
      contrastText: '#003257',
    },
    warning: {
      main: '#cace09',
      contrastText: '#313300',
    },
    divider: '#938f99',
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          lightTheme
        }
      : {
          darkTheme
        })
  }
})

