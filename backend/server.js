const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

// 1. Importar las rutas de empres
const empresaRoutes = require('./src/routes/empresaRoutes');

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

// 2. Registrar las rutas de la API (aquí es donde se conectan)
app.use('/api/empresas', empresaRoutes);

app.get('/', (req, res) => {
  res.send('Servidor de LogiTrack funcionando correctamente 🚀');
});

// Endpoint para probar la conexión con una consulta a la BD
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      mensaje: 'Conexión a PostgreSQL funcionando correctamente',
      fechaServidor: result.rows[0].now
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});