// backend/controllers/chatController.js
const Message = require('../models/message');

exports.getMessages = (req, res) => {
  Message.getMessages((err, messages) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los mensajes.' });
    }
    res.json(messages);
  });
};

exports.sendMessage = (req, res) => {
  const { author, message } = req.body;

  if (!author || !message) {
    return res.status(400).json({ error: 'El nombre del autor y el mensaje son obligatorios.' });
  }

  const timestamp = new Date().toLocaleTimeString();

  Message.createMessage(author, message, timestamp, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al enviar el mensaje.' });
    }
    res.status(201).json({ message: 'Mensaje enviado con éxito.', data: result });
  });
};
