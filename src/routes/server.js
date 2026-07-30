const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión usando tu archivo .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Probar la conexión a la base de datos
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.stack);
  }
  console.log('¡Conexión exitosa a la base de datos logitrack_db!');
  release();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de LogiTrack funcionando correctamente 🚀');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});