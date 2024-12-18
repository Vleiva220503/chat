import React from 'react';

const UserList = ({ users, currentUser, onSelectUser, selectedUser }) => {
  return (
    <div className="userlist-container">
      <ul className="userlist">
        {users.map((user) => (
          <li
            key={user.username}
            className={selectedUser === user.username ? 'selected' : ''}
            onClick={() => onSelectUser(user.username)}
          >
            {user.username === currentUser ? `${user.username} (Tú)` : user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
