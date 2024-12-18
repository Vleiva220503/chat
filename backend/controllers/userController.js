// backend/controllers/userController.js
const User = require('../models/user');

exports.createUser = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'El nombre de usuario es obligatorio.' });
  }

  User.createUser(username, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear el usuario.' });
    }
    res.status(201).json({ message: 'Usuario creado exitosamente.', user: result });
  });
};

exports.getUsers = (req, res) => {
  User.getUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
    res.json(users);
  });
};
