import "./Chat.css";
import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [emojiMenu, setEmojiMenu] = useState(false);
  const [message, setMessage] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAddEmoji = (e) => {
    setMessage((prev) => prev + e.emoji);
    setEmojiMenu(false);
  };

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

      <div className="chat-center">
        <div className="message-others">
          <img src="./avatar.png" alt="" />
          <div className="message-text">
            <img
              src="https://static.miraheze.org/hololivewiki/thumb/a/a0/Momosuzu_Nene_-_Portrait_02.png/580px-Momosuzu_Nene_-_Portrait_02.png"
              alt=""
              className="attached-image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              rem minus assumenda, animi ducimus deleniti ipsum corporis,
              dolorem tempora id, iste culpa? Accusamus natus officia doloribus
              eius accusantium ullam iure.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="message-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              rem minus assumenda, animi ducimus deleniti ipsum corporis,
              dolorem tempora id, iste culpa? Accusamus natus officia doloribus
              eius accusantium ullam iure.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message-others">
          <img src="./avatar.png" alt="" />
          <div className="message-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              rem minus assumenda, animi ducimus deleniti ipsum corporis,
              dolorem tempora id, iste culpa? Accusamus natus officia doloribus
              eius accusantium ullam iure.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="message-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              rem minus assumenda, animi ducimus deleniti ipsum corporis,
              dolorem tempora id, iste culpa? Accusamus natus officia doloribus
              eius accusantium ullam iure.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-others">
          <img src="./avatar.png" alt="" />
          <div className="message-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              rem minus assumenda, animi ducimus deleniti ipsum corporis,
              dolorem tempora id, iste culpa? Accusamus natus officia doloribus
              eius accusantium ullam iure.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="message-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              rem minus assumenda, animi ducimus deleniti ipsum corporis,
              dolorem tempora id, iste culpa? Accusamus natus officia doloribus
              eius accusantium ullam iure.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>
      <div className="chat-bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => handleMessageChange(e)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setEmojiMenu((prev) => !prev)}
          />
          <div className="emoji-picker">
            <EmojiPicker
              open={emojiMenu}
              onEmojiClick={(e) => handleAddEmoji(e)}
            />
          </div>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;
