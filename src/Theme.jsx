import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans', // Replace with the font name if you're hosting it locally
      'sans-serif',
    ].join(','),
  },
});

export default theme;
