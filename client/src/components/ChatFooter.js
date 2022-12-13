import React, { useState } from "react";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4578");

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("sendMessage", {
        text: message,
        name: localStorage.getItem("userName"),
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
