import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="headerTitle footerTitle curser">W.</div>
      <div className="footerContainers1">
        <div className="footerContainer">
          <span className="curser">Websites</span>
          <span className="curser">Collections</span>
          <span className="curser">Elements</span>
        </div>
        <div className="footerContainer">
          <span className="curser">Academy</span>
          <span className="curser">Jobs</span>
          <span className="curser">Market</span>
        </div>
        <div className="footerContainer">
          <span className="curser">Directory</span>
          <span className="curser">Conferences</span>
        </div>
        <div className="footerContainer">
          <span className="curser">FAQs</span>
          <span className="curser">About Us</span>
          <span className="curser">Contact Us</span>
        </div>
      </div>
      <div className="footerContainers2">
        <div className="footerContainer">
          <span className="curser">Websites</span>
          <span className="curser">Collections</span>
          <span className="curser">Elements</span>
          <span className="curser">Directory</span>
          <span className="curser">Conferences</span>
        </div>
        <div className="footerContainer">
          <span className="curser">Academy</span>
          <span className="curser">Jobs</span>
          <span className="curser">Market</span>
          <span className="curser">FAQs</span>
          <span className="curser">About Us</span>
          <span className="curser">Contact Us</span>
        </div>
      </div>

      <div className="footerEnd">
        <div className="footerEndLeft">
          <span className="curser">Cookies Policy</span>
          <span className="curser">Legal Terms</span>
          <span className="curser">Privacy Policy</span>
        </div>
        <div className="footerEndRight">
          <span className="fotterBoldText ">Connect:</span>
          <span className="curser">Instagram</span>
          <span className="curser">Linkedln</span>
          <span className="curser">Twitter</span>
          <span className="curser">Facebook</span>
          <span className="curser">Youtube</span>
          <span className="curser">TikTok</span>
          <span className="curser">Pinterest</span>
        </div>
      </div>
    </div>
  );
}
