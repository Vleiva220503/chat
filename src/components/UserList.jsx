import React, { useState } from "react";

const UserList = ({ users, currentUser, onSelectUser, selectedUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="userlist-container">
      <input
        type="text"
        placeholder="Buscar usuarios..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="userlist-search"
      />
      <ul className="userlist">
        {filteredUsers.map((user) => (
          <li
            key={user.username}
            onClick={() => onSelectUser(user.username)}
            className={`userlist-item ${
              selectedUser === user.username ? "selected" : ""
            }`}
          >
            <img
              src={`https://avatars.dicebear.com/api/initials/${user.username}.svg`}
              alt="Avatar"
              className="user-avatar"
            />
            {user.username === currentUser ? `${user.username} (Tú)` : user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
