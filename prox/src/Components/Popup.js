import React from "react";

import "../Style/Popup.css";

class Popup extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle = () => {
    var pop = document.getElementById("popup");
    document.getElementById("popup").style.visibility = "visible";

    document.getElementById("popup").style.opacity = "1";
  };

  close = () => {
    document.getElementById("popup").style.visibility = "hidden";
  };

  render() {
    return (
      <div className="pop">
        <div id="popup" onClick={this.close}>
          <h2 id="PopupHeading">{this.props.heading}</h2>
          <p>{this.props.body}</p>
        </div>
        <span onClick={this.toggle}>{this.props.heading}</span>
      </div>
    );
  }
}

export default Popup;
