import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatRoom = ({ user }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (messageText) => {
    if (messageText.trim() === "") return;

    const newMessage = {
      author: user,
      message: messageText,
      timestamp: new Date().toLocaleTimeString(),
    };

    // Agrega el nuevo mensaje al estado
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="chatroom-container">
      <div className="chat-header">
        <h2>Chat Global</h2>
        <p>Conectado como: <strong>{user}</strong></p>
      </div>
      <ChatMessages messages={messages} currentUser={user} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
