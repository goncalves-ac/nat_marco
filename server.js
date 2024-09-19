const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); // Para especificar caminhos, se necessário

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para expor a URL da API ao frontend
app.get('/api/config', (req, res) => {
  res.json({ apiUrl: process.env.REACT_APP_API_URL });
});

// Rota para lidar com RSVPs
app.post('/api/rsvps', (req, res) => {
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

// Serve arquivos estáticos se for necessário (opcional)
// app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
