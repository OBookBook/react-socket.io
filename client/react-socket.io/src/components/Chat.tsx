import { useState } from "react";
import { Socket } from "socket.io-client";

interface ChatProps {
  socket: Socket;
  username: string;
  room: string;
}

const Chat = ({ socket, username, room }: ChatProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        message: currentMessage,
        author: username,
        room: room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };

  socket.on("receive_message", (data) => {
    console.log(data);
  });

  return (
    <div>
      <div className="chat-window">
        <div className="chat-header">
          <p>ライブチャット</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-fotter">
          <input
            type="text"
            placeholder="add message"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button onClick={() => sendMessage()}>&#9658;</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
