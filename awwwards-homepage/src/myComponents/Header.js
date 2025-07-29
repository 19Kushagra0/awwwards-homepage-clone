import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitle">W.</div>
        <div className="headerButtons1">
          <button className="headerButton">
            Explore
            <div className="headerIcon"></div>
          </button>
          <button className="headerButton">Directory</button>
          <button className="headerButton">
            Academy
            <div className="newTag">New</div>
          </button>
          <button className="headerButton">Jobs</button>
          <button className="headerButton">Market</button>
        </div>
        <input
          placeholder="Search by Inspiration"
          className="headerInput"
          type="text"
        />
        <div className="headerButtons2">
          <div className="headerProfileButton">
            <div className="headerProfileicon"></div>
          </div>
          <div className="headerProButton">Be Pro</div>

          <div className="headerSubmitButton">Submit Website</div>
        </div>
      </div>
    </div>
  );
}
