import React, { useState } from "react";
import socketIO from "socket.io-client";
import env from "react-dotenv";
const socket = socketIO.connect(env.SERVER_URL);

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
