// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
require('dotenv').config();  // Cargar variables de entorno

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MySQL
const connection = require('./db');

// Verificar conexión
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
  console.log('Conexión a MySQL exitosa');
});

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/messages', chatRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
