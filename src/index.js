import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./custom.scss";
import App from './Router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

