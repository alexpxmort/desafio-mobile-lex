
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const cors = require('cors');
const data = require('../database.json');


app.use(cors());
// Definindo a rota para /employees
app.get('/employees', (req, res) => {
  res.json(data['employees']); // Retorna os dados em formato JSON
});

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
