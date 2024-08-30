import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes/routes.js'; // Ajuste o caminho conforme necessário
import './../style/App.css';

function App() {
  console.log('App component is rendering');
  return (
    <Router>
      <AppRoutes /> {/* Usa o componente de rotas aqui */}
    </Router>
  );
}

export default App;
