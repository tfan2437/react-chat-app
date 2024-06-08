import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail-container">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>

        <div className="photo">
          <div className="photo-item">
            <div className="photo-detail">
              <img
                src="https://viberatecdn.blob.core.windows.net/entity/artist/momosuzu-nene-tao-ling-nene-7HJZV"
                alt=""
              />
              <span>photo_2024_5.png</span>
            </div>
            <img src="./download.png" alt="" className="download-icon" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button className="block-user">Block User</button>
        <button className="log-out">Log Out</button>
      </div>
    </div>
  );
};

export default Detail;
