import "./App.css";
import { io } from "socket.io-client"; // socket.io/docs/v4/client-initialization/

const socket = io("http://localhost:5000");

function App() {
  return (
    <>
      <div className="app">
        <div className="join-chat">
          <h3 className="join-chat__title">Join Chat</h3>
          <input
            className="join-chat__input join-chat__input--name"
            type="text"
            placeholder="Name"
          />
          <input
            className="join-chat__input join-chat__input--room"
            type="text"
            placeholder="Room Number"
          />
          <button className="join-chat__button">Join Room</button>
        </div>
      </div>
    </>
  );
}

export default App;
