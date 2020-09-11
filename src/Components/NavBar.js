import React from "react";
import "../Style/NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <span id="companyName">Masti keriyan?</span>

        <span>
          <a href="">Our Services</a>
          <a href="">About us</a>
        </span>

        <button>Request a demo</button>
      </div>
    );
  }
}

export default NavBar;
