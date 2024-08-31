const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure a conexão com o banco de dados
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

// Nova rota para fornecer a URL da API ao frontend
app.get('/api/config', (req, res) => {
  res.json({ apiUrl: process.env.REACT_APP_API_URL });
});

// Rota para obter todos os RSVPs
app.get('/api/rsvps', (req, res) => {
  db.query('SELECT * FROM rsvps', (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    res.json(results);
  });
});

// Rota para adicionar um novo RSVP
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
