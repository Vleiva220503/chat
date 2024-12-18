import React from 'react';

const ChatMessages = ({ message, isOwnMessage }) => {
  return (
    <div className={`message ${isOwnMessage ? 'own' : ''}`}>
      <strong>{message.author}:</strong> {message.message}
    </div>
  );
};

export default ChatMessages;
