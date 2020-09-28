import React from "react";
import { SiFacebook, SiGmail, SiLinkedin } from "react-icons/si";

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
          <div id="footerMain">
            <h1>Masti keriyan?</h1>
            <p>
              Masti keriyan is an image annotation company forn computer vision
              projects.{" "}
            </p>
            <p>+92 300 6405343</p>
            <span>Get in touch</span>
            <a id="Links" href="/">
              <SiFacebook />
            </a>
            <a id="Links" href="/">
              <SiLinkedin />
            </a>
            <a id="Links" href={"mailto:" + "EMAIL"}>
              <SiGmail />
            </a>
          </div>

          <div id="col1">
            <h2>Solutions</h2>
            <a href="/">Lines</a>
            <a href="/">Bounding Boxes</a>
            <a href="/">Points</a>
            <a href="/">Polygons</a>
            <a href="/">Classification</a>
            <a href="/">Tracking</a>
          </div>

          <div id="col1">
            <h2>Core Values</h2>
            <a href="/">Quality</a>
            <a href="/">Security & Privacy</a>
            <a href="/">Timely Deliveries</a>
            <a href="/">Lowest Prices</a>
            <a href="/">Speed</a>
          </div>

          <div id="col1">
            <h2>Know Us more</h2>
            <a href="/">About Us</a>
          </div>

          <div id="col1">
            <h2>Join Us</h2>
            <a href="/">Careers</a>
          </div>

          <div id="col1">
            <h2>Legals</h2>
            <a href="/">Terms of Services</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
