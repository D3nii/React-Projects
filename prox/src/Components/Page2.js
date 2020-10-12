import React from "react";

import "../Style/Page2.css";

import { BsBoundingBox } from "react-icons/bs";
import { AiOutlineFall } from "react-icons/ai";
import { IoIosContract } from "react-icons/io";
import { VscSymbolClass } from "react-icons/vsc";
import { BsLifePreserver } from "react-icons/bs";
import { GiThreePointedShuriken } from "react-icons/gi";
import { BiShapePolygon } from "react-icons/bi";

let x = 0;
var l = "back1";

const moveSliderPointerH = (hor) => {
  let x = document.getElementById(l);

  x.style.width = hor + "px";

  x = document.getElementById("slider2");

  if (hor >= 0 && hor < 500) x.style.marginLeft = hor + "px";
}; //Controlling the horizontal movement

const moveSliderPointerV = (vert) => {
  x = document.getElementById("slider2");

  //x.style.position = "absolute";
  if (vert < 500) {
    x.style.marginTop = vert + "px";
    //x.style.marginBottom = (500 - vert) + "px";
  }
}; //Controlling the vertical movement

const moveSliderPointerHelper = (e) => {
  moveSliderPointerH(e.clientX - 79);
  moveSliderPointerV(e.clientY - 150);
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
      <section id="page2">
        <h1 id="main2">Services We Provide</h1>
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

              <div
                id="lol"
                className="slider"
                onMouseMove={moveSliderPointerHelper}
              >
                <div id="slider2">
                  <BsLifePreserver />
                </div>
              </div>
            </div>
          </div>
        </span>

        <div id="scroll">
          <span id="services">
            <div className="sliderOption">
              <span className="littleHeading">
                <IoIosContract id="icons" /> Tracking
              </span>{" "}
              <br />
              <a className="spe" id="section1">
                <span className="littleBody" onClick={first}>
                  For the problems as Surveillance, Monitoring and Enforcement,
                  detecting and tracking objects in videos.
                </span>
              </a>
            </div>

            <div className="sliderOption">
              <span className="littleHeading">
                <VscSymbolClass id="icons" />
                Classification
              </span>{" "}
              <br />
              <a className="spe">
                <span className="littleBody" onClick={second}>
                  For classification of images to assign them different classes.
                </span>
              </a>
            </div>

            <div className="sliderOption">
              <span className="littleHeading">
                <BsBoundingBox id="icons" />
                Bounding Boxes
              </span>
              <br />
              <a className="spe" onClick={third}>
                <span className="littleBody">
                  Bounding Boxes are quick and cheap to make, especially with
                  experience. For object detection, localization using
                  2-dimensional or 3-dimensional bounding boxes.
                </span>
              </a>
            </div>

            <div className="sliderOption">
              <span className="littleHeading">
                <BiShapePolygon id="icons" />
                Polygons
              </span>{" "}
              <br />
              <a className="spe" onClick={third}>
                <span className="littleBody">
                  For applications like semantic and instance segmentation.{" "}
                </span>
              </a>
            </div>

            <div className="sliderOption">
              <span className="littleHeading">
                <GiThreePointedShuriken id="icons" />
                Points
              </span>{" "}
              <br />
              <a className="spe" onClick={second}>
                <span className="littleBody">
                  For key point estimation in problems in Pose Estimation or
                  Facial key points Estimation.{" "}
                </span>
              </a>
            </div>

            <div className="sliderOption">
              <span className="littleHeading">
                <AiOutlineFall id="icons" />
                Lines
              </span>{" "}
              <br />
              <a className="spe" onClick={first} id="section2">
                <span className="littleBody">
                  For Main roads / Lanes for the self-driving car technology.
                </span>
              </a>
            </div>
          </span>
        </div>
        <img
          src={require("../Images/down_arrow.gif")}
          alt="loading..."
          id="down_arrow"
        />
      </section>
    );
  }
}

export default Page2;
