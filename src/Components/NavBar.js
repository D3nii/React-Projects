import React from "react";
import "../Style/NavBar.css";
import Email from "./email";

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

        <button onClick={<Email />}>Request a demo</button>
      </div>
    );
  }
}

export default NavBar;
