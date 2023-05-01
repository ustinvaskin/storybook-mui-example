import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/500.css';
import '@fontsource/lato/600.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { themes } from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.dark}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
