const express = require('express');
const cors = require('cors');
require('dotenv').config();

const empresaRoutes = require('./routes/empresaRoutes');
const envioRoutes = require('./routes/envioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/empresas', empresaRoutes);
app.use('/api/envios', envioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});