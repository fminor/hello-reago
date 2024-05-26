import { ThemeContext } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '0.875rem'
        },
      },
    },

  },
  palette: {
    primary:
    {
      main: "#deadbe"
    },
    secondary:
    {
      main: "#010101"
    }
  },
})