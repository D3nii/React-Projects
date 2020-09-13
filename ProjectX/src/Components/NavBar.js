import React from "react";
import "../Style/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Link to="/">
          <span id="companyName">Masti keriyan?</span>
        </Link>
        <Link to="/">
          <span>Our Services</span>
          <span>About</span>
        </Link>
        <Link to="/demo">
          <button class="de">Request a demo</button>
        </Link>
      </div>
    );
  }
}

export default NavBar;
