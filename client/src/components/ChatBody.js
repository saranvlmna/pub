import React from "react";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";
import env from "react-dotenv";
const socket = socketIO.connect(env.SERVER_URL);

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    socket.emit("setOffline", {
      userName: localStorage.getItem("userName"),
      socketID: socket.id,
    });
    localStorage.removeItem("userName");
    navigate("/");

    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          exit
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
