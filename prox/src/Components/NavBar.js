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
        <a href="#main2" className="navBar">
          Annotation
        </a>
        <a href="#Testimonial" className="navBar">
          Testimonials
        </a>
        <span className="navBar">About us</span>
        <div id="nav_button">
          <button className="navButton">Request a demo</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
