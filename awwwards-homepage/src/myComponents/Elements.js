import React from "react";
import "../styles/Elements.css";

export default function Elements() {
  return (
    <div className="elements">
      <div className="elementsText">Elements</div>

      <h3 className="highlights">
        See the highlights <br /> of this website.
      </h3>

      <div className="elementBoxContainer">
        <div className="elementBox">
          <div className="elementBoxTop">
            <video
              src="https://assets.awwwards.com/awards/element/2025/06/684833f51c628585708702.mp4"
              className="elementImage"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="elementBoxBottom">
            <span>Feature showcase</span>
            <span className="smallValue"> from </span>
            <span className="underline">Interaction</span>
          </div>
        </div>
        <div className="elementBox">
          <div className="elementBoxTop">
            <video
              src="https://assets.awwwards.com/awards/element/2025/06/6848340049bba496186506.mp4"
              className="elementImage"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="elementBoxBottom">
            <span>Feature showcase</span>
            <span className="smallValue"> from </span>
            <span className="underline">Interaction</span>
          </div>
        </div>
        <div className="elementBox">
          <div className="elementBoxTop">
            <video
              src="https://assets.awwwards.com/awards/element/2025/06/6848340537833360181614.mp4"
              className="elementImage"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="elementBoxBottom">
            <span>Feature showcase</span>
            <span className="smallValue"> from </span>
            <span className="underline">Interaction</span>
          </div>
        </div>
        <div className="elementBox">
          <div className="elementBoxTop">
            <video
              src="https://assets.awwwards.com/awards/element/2025/06/684834296bddb046731662.mp4"
              className="elementImage"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="elementBoxBottom">
            <span>Feature showcase</span>
            <span className="smallValue"> from </span>
            <span className="underline">Interaction</span>
          </div>
        </div>
        <div className="elementBox">
          <div className="elementBoxTop">
            <video
              src="https://assets.awwwards.com/awards/element/2025/06/68483592b6ed0415234204.mp4"
              className="elementImage"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="elementBoxBottom">
            <span>Feature showcase</span>
            <span className="smallValue"> from </span>
            <span className="underline">Interaction</span>
          </div>
        </div>
        <div className="elementBox">
          <div className="elementBoxTop">
            <video
              src="https://assets.awwwards.com/awards/element/2025/06/684833fc3937e036551369.mp4"
              className="elementImage"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="elementBoxBottom">
            <span>Feature showcase</span>
            <span className="smallValue"> from </span>
            <span className="underline">Interaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}
