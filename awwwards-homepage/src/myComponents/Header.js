import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="hambergerContainer">
          <span class="hamberger material-symbols-outlined">menu</span>
        </div>
        <div className="headerTitle">
          <span className="point">W.</span>
        </div>
        <div className="headerButtons1">
          <button className="headerButton">
            Explore
            <span class="headerIcon material-symbols-outlined">
              stat_minus_1
            </span>
          </button>
          <button className="headerButton">Directory</button>
          <button className="headerButton">
            Academy
            <div className="newTag">New</div>
          </button>
          <button className="headerButton">Jobs</button>
          <button className="headerButton">Market</button>
        </div>
        <div className="inputContainer">
          <div className="inputBox">
            <span class="searchIcon material-symbols-outlined">search</span>

            <input
              placeholder="Search by Inspiration"
              className="headerInput"
              type="text"
            />
          </div>
        </div>

        <div className="headerButtons2">
          <div className="headerProfileButton">
            <img
              className="headerProfileicon"
              src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user5.jpg"
              alt=""
            />
          </div>
          <div className="headerProButton">Be Pro</div>

          <div className="headerSubmitButton">Submit Website</div>
        </div>
      </div>
    </div>
  );
}
