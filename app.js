// app.js - Aplicación de ejemplo
const express = require('express');
const app = express();

// ERROR COMÚN: credenciales escritas directamente en el código
const DB_PASSWORD = "SuperSecreta123!";
const STRIPE_KEY = "sk_live_4eC39HqLyjWDarjtT1zdp7dc";

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(3000);
