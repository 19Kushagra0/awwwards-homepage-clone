import React from "react";
import "../styles/Title.css";

export default function Title() {
  return (
    <div className="title">
      <div className="siteScore">
        <span>Site of the Day - Jul 25, 2025</span>
      </div>
      <div className="siteName">DAYDREAM PLAYER</div>
      <div className="siteCreaterName">
        <div className="createrProfileIcon"></div>
        <span className="CreaterName">Bukvity Lorisz</span>
      </div>
      <div className="sitePhotoOuterContainer">
        <div className="sitePhotoContainer">
          <img
            className="sitePhoto"
            src="https://assets.awwwards.com/awards/submissions/2025/06/68481c114e66c833881376.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
