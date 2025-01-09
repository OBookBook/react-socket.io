import { useState } from "react";
import "./App.css";
import { io } from "socket.io-client"; // socket.io/docs/v4/client-initialization/
import Chat from "./components/Chat";

const socket = io("http://localhost:5000");

function App() {
  const [username, SetUserName] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <>
      <div className="app">
        <div className="join-chat">
          <h3 className="join-chat__title">Join Chat</h3>
          <input
            className="join-chat__input join-chat__input--name"
            type="text"
            placeholder="Name"
            onChange={(e) => SetUserName(e.target.value)}
          />
          <input
            className="join-chat__input join-chat__input--room"
            type="text"
            placeholder="Room Number"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button className="join-chat__button" onClick={() => joinRoom()}>
            Join Room
          </button>
        </div>
        <Chat socket={socket} username={username} room={room} />
      </div>
    </>
  );
}

export default App;
