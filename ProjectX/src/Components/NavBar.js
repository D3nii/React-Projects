import React from "react";
import "../Style/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="hred">
        <Link to="/">
          <span id="companyName" className="hred">
            Masti keriyan?
          </span>
        </Link>
        <Link to="/services">
          <span>Our Services</span>
        </Link>
        <span className="hred">About</span>

        <Link to="/demo">
          <button className="de">Request a demo</button>
        </Link>
      </div>
    );
  }
}

export default NavBar;
