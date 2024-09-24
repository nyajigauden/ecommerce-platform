import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './styles/global.css'; // Import global styles
import App from './App';

// Create a root and render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);