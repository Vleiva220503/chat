// backend/models/user.js
const connection = require('../db');

// Función para crear un usuario
const createUser = (username, callback) => {
  const query = 'INSERT INTO users (username) VALUES (?)';
  connection.query(query, [username], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Función para obtener todos los usuarios
const getUsers = (callback) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { createUser, getUsers };
