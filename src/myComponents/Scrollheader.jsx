import React, { useEffect, useState } from "react";
import "../styles/Scrollheader.css";

export default function Scrollheader() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 1000); // 👈 Changed from 0 to 500
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showHeader && (
      <div className="scrollheader">
        <div className="leftHeader">
          <span>Daydream Player</span>
          <span className="small">by</span>
          <img
            className="createrImage"
            src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user5.jpg"
            alt="Creator"
          />
          <div className="underline createrName">Bukvity Lorisz</div>
        </div>
        <div className="rightHeader">
          <span className="toolbarIcon material-symbols-outlined">
            bookmark
          </span>
          <span className="toolbarIcon material-symbols-outlined">share</span>
          <span className="toolbarIcon material-symbols-outlined">
            open_in_new
          </span>
        </div>
      </div>
    )
  );
}
