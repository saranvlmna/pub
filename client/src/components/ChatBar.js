import React, { useState, useEffect } from "react";

const ChatBar = ({ socket }) => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="chat__sidebar">
      <h2>vLmNa</h2>
      <div>
        <h4 className="chat__header">Online</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
