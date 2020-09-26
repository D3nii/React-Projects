import React from "react";

import "../Style/Page1.css";

class Page1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page1">
        <div id="main">
          <span style={{ color: "darkcyan" }}>Image Annotation</span> <br /> for{" "}
          <br /> Computer Vision
        </div>
        <div id="leftover">
          We provide high quality food for your machine learning models <br />{" "}
          so that they grow healthy and fat.{" "}
        </div>

        <div id="rightslide">CHOTI WALI SLIDE!</div>
      </div>
    );
  }
}

export default Page1;
