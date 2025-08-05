import React from "react";
import "../styles/Collections.css";

export default function Collections() {
  return (
    <div className="collections">
      <h2 className="collectionsTitle">Collections</h2>
      <h3 className="collectionsDescription">
        <span>Explore more </span>
        <br />
        <span>great collections.</span>
      </h3>
      <div className="collections-container">
        <div className="collections-box collections-box1">
          <img
            className="collections-image"
            src="https://assets.awwwards.com/awards/images/2024/04/transitions.jpg"
            alt=""
          />
          <div className="collections-text">
            <span className="">Transitions</span>
            <span className=" collections-smallText">followed by</span>
            <div className=" imagesContainers">
              <div className="imagesContainer1">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2158398/688487f1d0608417696534.jpg"
                  alt=""
                />
              </div>
              <div className="imagesContainer2">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user4.jpg"
                  alt=""
                />
              </div>
              <div className="imagesContainer3">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user7.jpg"
                  alt=""
                />
              </div>
            </div>
            <span className="number">+1993</span>
          </div>
        </div>
        <div className="collections-box ">
          <img
            className="collections-image"
            src="https://assets.awwwards.com/awards/images/2024/04/loading-websites-collection.jpg"
            alt=""
          />

          <div className="collections-text">
            <span className="">WebGL</span>
            <span className="collections-smallText">followed by</span>
            <div className="imagesContainers ">
              <div className="imagesContainer1">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/images/2024/04/loading-websites-collection.jpg"
                  alt=""
                />
              </div>
              <div className="imagesContainer2">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/images/2024/04/footer_collection.jpg"
                  alt=""
                />
              </div>
              <div className="imagesContainer3">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user7.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="number">+1993</div>
          </div>
        </div>
        <div className="collections-box ">
          <img
            className="collections-image"
            src="https://assets.awwwards.com/awards/images/2024/04/footer_collection.jpg"
            alt=""
          />
          <div className="collections-text">
            <span className="">Transitions</span>
            <span className="collections-smallText">followed by</span>
            <div className=" imagesContainers">
              <div className="imagesContainer1">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2158398/688487f1d0608417696534.jpg"
                  alt=""
                />
              </div>
              <div className="imagesContainer2">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user4.jpg"
                  alt=""
                />
              </div>
              <div className="imagesContainer3">
                <img
                  className="image"
                  src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user7.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="number">+1993</div>
          </div>
        </div>
      </div>
    </div>
  );
}
