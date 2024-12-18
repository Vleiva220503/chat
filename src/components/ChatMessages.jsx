import React from "react";

const ChatMessages = ({ messages, currentUser }) => {
  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.author === currentUser ? "own-message" : "other-message"
          }`}
        >
          <div className="message-author">
            {msg.author === currentUser ? "Tú" : msg.author}
          </div>
          <div className="message-text">{msg.message}</div>
          <div className="message-timestamp">{msg.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
