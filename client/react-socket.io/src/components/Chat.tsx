import { useState } from "react";

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const sendMessage = () => {
    console.log(currentMessage);
  };

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
