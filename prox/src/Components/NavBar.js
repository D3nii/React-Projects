import React from "react";
import "../Style/NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navBar">
        <span id="companyName" className="navBar">
          Masti keriyan?
        </span>
        <span className="navBar">Annotation</span>
        <span className="navBar">Industries</span>
        <span className="navBar">Portfolio</span>
        <span className="navBar">Testimonials</span>
        <span className="navBar">About us</span>

        <button className="navButton">Request a demo</button>
      </div>
    );
  }
}

export default NavBar;
