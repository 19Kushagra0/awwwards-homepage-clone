import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="headerTitle footerTitle">W.</div>
      <div className="footerContainers1">
        <div className="footerContainer">
          <span>Websites</span>
          <span>Collections</span>
          <span>Elements</span>
        </div>
        <div className="footerContainer">
          <span>Academy</span>
          <span>Jobs</span>
          <span>Market</span>
        </div>
        <div className="footerContainer">
          <span>Directory</span>
          <span>Conferences</span>
        </div>
        <div className="footerContainer">
          <span>FAQs</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div className="footerContainers2">
        <div className="footerContainer">
          <span>Websites</span>
          <span>Collections</span>
          <span>Elements</span>
          <span>Directory</span>
          <span>Conferences</span>
        </div>
        <div className="footerContainer">
          <span>Academy</span>
          <span>Jobs</span>
          <span>Market</span>
          <span>FAQs</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="footerEnd">
        <div className="footerEndLeft">
          <span>Cookies Policy</span>
          <span>Legal Terms</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footerEndRight">
          <span className="fotterBoldText">Connect:</span>
          <span>Instagram</span>
          <span>Linkedln</span>
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Youtube</span>
          <span>TikTok</span>
          <span>Pinterest</span>
        </div>
      </div>
    </div>
  );
}
