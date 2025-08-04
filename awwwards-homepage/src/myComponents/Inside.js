import React from "react";
import "../styles/Inside.css";

export default function Inside() {
  return (
    <div className="inside">
      <div className="insideTitle">Inside look</div>
      <div className="insideDescription">
        <span>Discover more</span>
        <br />
        <span>details of this SOTD.</span>
      </div>
      <div className="insideContainer">
        <div className="insideBox">
          <img
            className="insideImage"
            src="https://assets.awwwards.com/awards/element/2025/06/68481b69b9bd9633253773.png"
            alt=""
          />
          <div className="insideBoxText">
            <span>Desktop</span>
            <span className="smalll">from</span>
            <span className="underline">Desktop thumbnail</span>
          </div>
        </div>
        <div className="insideBox">
          <img
            className="insideImage"
            src="https://assets.awwwards.com/awards/element/2025/06/68481b69c2998960640566.png"
            alt=""
          />

          <div className="insideBoxText">
            <span>Mobile</span>
            <span className="smalll">from</span>
            <span className="underline">Mobile thumbnail</span>
          </div>
        </div>
      </div>
    </div>
  );
}
