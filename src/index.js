import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <CssBaseline />
    <Navbar position='sticky'>Header</Navbar>
    <App />
    <Footer />
  </React.Fragment>
);
