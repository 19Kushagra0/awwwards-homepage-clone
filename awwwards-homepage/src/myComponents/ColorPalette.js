import React from "react";
import "../styles/ColorPalette.css";

export default function ColorPalette() {
  return (
    <div className="colorPalette">
      <h2 className="colorPalateTitle">Color Palatte</h2>
      <p className="colorPalateDescription">
        This website uses a color <br /> palette of 1 colors
      </p>
      <div className="paletteContainer">
        <div className="palette">
          <div className="paletteTop">
            <div className="paletteTopLeft">
              <span className="hex">HEX</span> #EE4137
            </div>
            <div className="paletteDownRight"></div>
          </div>
          <div className="paletteDown">Aa</div>
        </div>
      </div>
    </div>
  );
}
