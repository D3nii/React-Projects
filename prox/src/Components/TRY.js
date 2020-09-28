//<div id="slider2" onMouseOver={this.waqayi}>
import React from "react";

import "../Style/TRY.css";

class TRY extends React.Component {
  constructor() {
    super();

    this.waqayi = this.waqayi.bind(this);
    this.llol = this.llol.bind(this);
  }

  waqayi = (we) => {
    let x = document.getElementById("slider2");
    x.style.marginLeft = we + "px";
  };

  llol = (e) => {
    this.waqayi(e.clientX);
  };

  render() {
    return (
      <div id="lol" onMouseMove={this.llol}>
        <div id="slider2">LOL</div>
      </div>
    );
  }
}

export default TRY;
