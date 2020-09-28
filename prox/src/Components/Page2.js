import React from "react";

import "../Style/Page2.css";

var l = "back1";

const lol = (we) => {
  let x = document.getElementById(l);
  x.style.width = we + "px";
  x = document.getElementById("slider2");
  x.style.marginLeft = we + "px";
};

const llol = (e) => {
  lol(e.clientX - 79);
};

const first = () => {
  l = "back1";
  document.getElementById("img1").style.display = "block";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img2").style.display = "none";
};

const second = () => {
  l = "back2";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "none";
};

const third = () => {
  l = "back3";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "block";
};

class Page2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1 id="main2" style={{ color: "darkcyan", fontSize: "50px" }}>
          Services We Provide
        </h1>
        <section id="page2">
          <span id="slider">
            <div className="images">
              <div className="slidecontainer">
                <div id="img1">
                  <div id="back1"></div>
                  <div id="front1"></div>
                </div>
                <div id="img2">
                  <div id="back2"></div>
                  <div id="front2"></div>
                </div>
                <div id="img3">
                  <div id="back3"></div>
                  <div id="front3"></div>
                </div>

                <div id="lol" className="slider" onMouseMove={llol}>
                  <div id="slider2">LOL</div>
                </div>
              </div>
            </div>
          </span>

          <span id="services">
            <a className="spe" onClick={first}>
              <div className="sliderOption">
                <span className="littleHeading">Tracking</span> <br />
                <span className="littleBody">
                  For the problems as Surveillance, Monitoring and Enforcement,
                  detecting and tracking objects in videos.
                </span>
              </div>
            </a>

            <a className="spe" onClick={second}>
              <div className="sliderOption">
                <span className="littleHeading">Classification</span> <br />
                <span className="littleBody">
                  For classification of images to assign them different classes.
                </span>
              </div>
            </a>

            <a className="spe" onClick={third}>
              <div className="sliderOption">
                <span className="littleHeading">Bounding Boxes</span>
                <br />
                <span className="littleBody">
                  Bounding Boxes are quick and cheap to make, especially with
                  experience. For object detection, localization using
                  2-dimensional or 3-dimensional bounding boxes.
                </span>
              </div>
            </a>
            <a className="spe" onClick={second}>
              <div className="sliderOption">
                <span className="littleHeading">Polygons</span> <br />
                <span className="littleBody">
                  For applications like semantic and instance segmentation.{" "}
                </span>
              </div>
            </a>
            <a className="spe" onClick={second}>
              <div className="sliderOption">
                <span className="littleHeading">Points</span> <br />
                <span className="littleBody">
                  For key point estimation in problems in Pose Estimation or
                  Facial key points Estimation.{" "}
                </span>
              </div>
            </a>

            <a className="spe" onClick={second}>
              <div className="sliderOption">
                <span className="littleHeading">Lines</span> <br />
                <span className="littleBody">
                  For Main roads / Lanes for the self-driving car technology.
                </span>
              </div>
            </a>
          </span>
        </section>
      </>
    );
  }
}

export default Page2;
