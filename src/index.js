import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'; // Verifique se o caminho está correto
import App from './pages/App.js'; // Ajuste o caminho se necessário

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
