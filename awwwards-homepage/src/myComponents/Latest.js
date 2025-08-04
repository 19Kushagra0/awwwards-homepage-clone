import React from "react";
import "../styles/Latest.css";

export default function Latest() {
  return (
    <div className="latest">
      <div className="latestText">latest</div>
      <div className="nominees">NOMINEES</div>
      <div className="voteMeesage">
        <span>
          Vote for the latest websites on
          <br />
        </span>

        <span> awwwards </span>
      </div>
      <div className="nomineesContainers">
        <div className="nomineesContainer">
          <div className="nomineeImage"></div>
          <div className="nomineeCreater">
            <span>Smoothy </span>
            <span className="by">by </span>
            <div className="nomineesImage"></div>
            <span>Federico </span>
            <span className="by">PRO </span>
          </div>
        </div>
        <div className="nomineesContainer">
          <div className="nomineeImage"></div>
          <div className="nomineeCreater">
            <span>Cartier Watches & Wonders 2025 </span>

            <span className="by">by </span>
            <span>Immersive Garden </span>
            <span className="by">INT </span>
          </div>
        </div>
        <div className=" removeNomineesContainer nomineesContainer">
          <div className="nomineeImage"></div>
          <div className="nomineeCreater">
            <span>Allbirds</span>
            <span className="by">by </span>
            <div className="nomineesImage"></div>
            <span>Pattern </span>
            <span className="by">int </span>
          </div>
        </div>
      </div>
    </div>
  );
}
