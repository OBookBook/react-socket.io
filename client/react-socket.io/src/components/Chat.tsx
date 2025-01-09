import { useState } from "react";
import { Socket } from "socket.io-client";

interface ChatProps {
  socket: Socket;
  username: string;
  room: string;
}

interface Message {
  message: string;
  author: string;
  room: string;
  time: string;
}

const Chat = ({ socket, username, room }: ChatProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageLists, setMessageList] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData: Message = {
        message: currentMessage,
        author: username,
        room: room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList([...messageLists, messageData]);
      setCurrentMessage("");
    }
  };

  socket.on("receive_message", (data: Message) => {
    setMessageList([...messageLists, data]);
  });

  return (
    <div>
      <div className="chat-window">
        <div className="chat-header">
          <p>ライブチャット</p>
        </div>
        <div className="chat-body">
          {messageLists.map((res, index) => (
            <div key={index} id={username == res.author ? "you" : "other"}>
              <p>{res.message}</p>
              <div className="message-meta">
                <p className="time">{res.time}</p>
                <p className="author">{res.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="chat-fotter">
          <input
            type="text"
            placeholder="add message"
            onChange={(e) => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
          <button onClick={() => sendMessage()}>&#9658;</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
