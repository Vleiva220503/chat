import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("El nombre de usuario es obligatorio.");
      return;
    }
    setUser(username);
  };

  return (
    <div className="login-container">
       <h2>Iniciar Sesión</h2>
      <div className="login-box">
     
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        {error && <div className="error-message">{error}</div>}
        <button onClick={handleLogin} className="login-button">
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
