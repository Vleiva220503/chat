import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageInput from './ChatInput';
import ChatMessages from './ChatMessages';
import UserList from './UserList';

const ChatRoom = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Obtener mensajes
    axios.get('http://localhost:5000/api/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(err => console.error("Error al obtener mensajes:", err));

    // Obtener usuarios
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.error("Error al obtener usuarios:", err));
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') return;

    axios.post('http://localhost:5000/api/messages/send', {
      author: user,
      message,
    })
    .then(response => {
      setMessages(prevMessages => [response.data.data, ...prevMessages]);
      setMessage('');
    })
    .catch(err => console.error("Error al enviar mensaje:", err));
  };

  return (
    <div className="chatroom-container">
      <div className="sidebar">
        <UserList
          users={users}
          currentUser={user}
          onSelectUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      </div>
      <div className="chat-content">
        <div className="chat-header">
          <h2>Chat en Tiempo Real</h2>
          {selectedUser ? <p>Chateando con: {selectedUser}</p> : <p>Chat General</p>}
        </div>
        <div className="chat-messages">
          {messages
            .filter((msg) => msg.to === selectedUser || msg.to === 'general')
            .map((msg, index) => (
              <ChatMessages key={index} message={msg} isOwnMessage={msg.author === user} />
            ))}
        </div>
        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatRoom;
