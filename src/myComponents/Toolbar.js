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
        <span class="toolbarIcon material-symbols-outlined">bookmark</span>
        <span class="toolbarIcon material-symbols-outlined">share</span>
        <span class="toolbarIcon material-symbols-outlined">open_in_new</span>
      </div>
    </div>
  );
}
