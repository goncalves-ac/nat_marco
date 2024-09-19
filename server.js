const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); // Para especificar caminhos, se necessário

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Permite requisições de diferentes origens
app.use(bodyParser.json()); // Analisa o corpo das requisições em JSON

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para expor a URL da API ao frontend
app.get('/api.php', (req, res) => {
  res.json({ apiUrl: `${process.env.REACT_APP_API_URL}/api/rsvps` });
});

// Rota para lidar com RSVPs
app.post('/api.php', (req, res) => {
  const { name, conf, message } = req.body;
  const newRSVP = { name, conf, message };

  db.query('INSERT INTO rsvps SET ?', newRSVP, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    res.status(201).json({ id: results.insertId, ...newRSVP });
  });
});

// Servir arquivos estáticos (se necessário)
// Se você estiver servindo arquivos estáticos, como uma build do React, descomente e ajuste o caminho
// app.use(express.static(path.join(__dirname, 'build')));

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
