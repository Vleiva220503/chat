import React from 'react';

const ChatInput = ({ message, setMessage, sendMessage }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input-field"
      />
      <button onClick={sendMessage} className="send-button">Enviar</button>
    </div>
  );
};

export default ChatInput;
