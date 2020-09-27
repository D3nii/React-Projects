import React from "react";

import "../Style/Footer.css";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="App">
        <br />
        <div id="col">
          <div id="jak">
            <h1>Masti keriyan?</h1>
            <p>Masti keriyan</p>
          </div>

          <div id="col1">
            <h2>Community</h2>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div id="col1">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div id="col1">
            <h2>Subscribe</h2>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
