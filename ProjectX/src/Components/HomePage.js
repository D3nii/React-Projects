import React from "react";

import "../Style/HomePage.css";

var l = "back1";

const lol = (we) => {
  let x = document.getElementById(l);
  x.style.width = we + "px";
};

const lol2 = (e) => {
  lol(e.target.value);
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
  document.getElementById("img3").style.display = "none";
  document.getElementById("img2").style.display = "block";
};

const third = () => {
  l = "back3";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "block";
};

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
            your Business.
          </div>

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

                <input
                  type="range"
                  min="0"
                  max="500"
                  className="slider"
                  onChange={lol2}
                />
              </div>
            </div>
          </span>

          <span id="services">
            <a className="spe" onClick={first}>
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

            <a className="spe" onClick={second}>
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

            <a className="spe" onClick={third}>
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
