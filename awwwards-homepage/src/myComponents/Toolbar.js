import React from "react";
import "../styles/Toolbar.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="boxScore">
        <div className="boxScoreTop">SOTD</div>
        <div className="boxScoreBottom">
          <span className="toolbarFont1">7.25</span>
          <span className="toolbarFont2">/10</span>
        </div>
      </div>
      <div className="toolbarIcons">
        <div className="toolbarIcon"></div>
        <div className="toolbarIcon"></div>
        <div className="toolbarIcon"></div>
      </div>
    </div>
  );
}
