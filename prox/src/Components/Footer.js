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
        <div id="jake">
          <div id="jak">
            <h1>Masti keriyan?</h1>
            <p>ahsuhdfgjhgfdgshjahsgdfgshajhs</p>
          </div>

          <div id="jake2">
            <h2>Community</h2>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div id="jake1">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div id="jake1">
            <h2>Subscribe</h2>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
