// backend/models/message.js
const connection = require('../db');

// Función para crear un mensaje
const createMessage = (author, message, timestamp, callback) => {
  const query = 'INSERT INTO messages (author, message, timestamp) VALUES (?, ?, ?)';
  connection.query(query, [author, message, timestamp], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Función para obtener todos los mensajes
const getMessages = (callback) => {
  const query = 'SELECT * FROM messages ORDER BY timestamp DESC';
  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { createMessage, getMessages };
