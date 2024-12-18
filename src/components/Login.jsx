import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      setError('El nombre de usuario es obligatorio.');
      return;
    }

    // Crear el usuario en la base de datos
    axios.post('http://localhost:5000/api/users/create', { username })
      .then(response => {
        setUser(username);
      })
      .catch(err => {
        setError('Error al crear el usuario.');
        console.error(err);
      });
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Ingresa tu nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default Login;
