import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4578");

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };

  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={2}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
