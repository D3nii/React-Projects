import React from "react";
import "../Style/NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="hred">
        <span id="companyName" className="hred">
          Masti keriyan?
        </span>
        <span className="hred">Annotation</span>
        <span className="hred">Industries</span>
        <span className="hred">Portfolio</span>
        <span className="hred">Testimonials</span>
        <span className="hred">About us</span>

        <button className="de">Request a demo</button>
      </div>
    );
  }
}

export default NavBar;
