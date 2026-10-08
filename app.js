// app.js - Aplicación de ejemplo (versión segura)
require('dotenv').config();
const express = require('express');
const app = express();

// Credenciales leídas desde variables de entorno (archivo .env)
const DB_PASSWORD = process.env.DB_PASSWORD;
const STRIPE_KEY = process.env.STRIPE_KEY;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(3000);
