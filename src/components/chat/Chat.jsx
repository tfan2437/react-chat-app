import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-top">
        <div className="user-info">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="chat-center"></div>
      <div className="chat-bottom"></div>
    </div>
  );
};

export default Chat;
