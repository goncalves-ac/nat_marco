import React from 'react';
import AppRoutes from '../routes/routes.js'; // Ajuste o caminho conforme necessário
import './../style/App.css';

function App() {
  console.log('App component is rendering');
  return (
    <AppRoutes /> // Usa o componente de rotas aqui
  );
}

export default App;
