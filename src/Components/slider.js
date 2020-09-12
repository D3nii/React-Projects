import React from "react";
import "../Style/slider.css";

export let el;

el = "back1";

function Slider({ pic }) {
  const lol = (we) => {
    alert(pic);
    let x = document.getElementById(pic);
    x.style.width = we + "px";
  };

  const lol2 = (e) => {
    lol(e.target.value);
  };

  return (
    <div className="images">
      <div className="slidecontainer">
        <div id="img1">
          <div id="back1"></div>
          <div id="front1"></div>
        </div>

        <div id="img2">
          <div id="back2"></div>
          <div id="front2"></div>
        </div>

        <div id="img3">
          <div id="back3"></div>
          <div id="front3"></div>
        </div>

        <input
          type="range"
          min="0"
          max="500"
          className="slider"
          onChange={lol2}
        />
      </div>
    </div>
  );
}

export default Slider;
