import React from "react";

import Slider from "./slider";
import "../Style/HomePage.css";
import "./slider";

let el = "block1";

function Semantic() {
  document.getElementById("img1").style.display = "none";

  document.getElementById("img3").style.display = "block";
  el = "back3";
}

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <section id="page1">
          <div id="Main">Kiya baat hai ji!</div>
          <div>•Image Annotation •Another thing •Another thing 2</div>
        </section>

        <section id="page2">
          <div className="heading">
            All in One{" "}
            <span className="colorRed">Image Recognition Solutions</span> for
            your Business!
          </div>

          <span id="slider">
            <Slider pic={el} />
          </span>

          <span id="services">
            <a onClick={Semantic}>
              <div className="sliderOption">
                <span className="littleHeading">Semantic Segmentation</span>{" "}
                <br />
                <span className="littleBody">
                  Every pixel in an image is painstakingly masked by our in
                  house team of talented human cloud workers. Combine their
                  skills with your knowledge to make the most valuable data.
                </span>
              </div>
            </a>

            <a>
              <div className="sliderOption">
                <span className="littleHeading">Instance Segmentation</span>{" "}
                <br />
                <span className="littleBody">
                  Masks are highly accurate and beautiful and are made by
                  skilled professionals. Bounding Boxes can be upgraded to Masks
                  only if required, make only the Masks you need.
                </span>
              </div>
            </a>

            <a>
              <div className="sliderOption">
                <span className="littleHeading">Bounding Boxes</span>
                <br />
                <span className="littleBody">
                  Bounding Boxes are quick and cheap to make, especially with
                  experience. Labelling boxes sometimes requires domain
                  expertise, we have experts in house, or bring your own.
                </span>
              </div>
            </a>
          </span>
        </section>

        <section id="page3">Blocks wala kaam</section>
        <hr />
      </>
    );
  }
}

export default HomePage;
