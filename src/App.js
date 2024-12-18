import React, { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div className="app-container">
      {user ? (
        <ChatRoom user={user} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;
