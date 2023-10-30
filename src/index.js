import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    profileBackground: '#e6e6fa',
    grey: 'grey',
    black: 'black',
    socialBackground: '#f8f8ff',
    white: '#fffafa',
  },
  radii: {
    sm: '1px',
    md: '4px',
    lg: '8px',
  },
  spacing: (value) => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
