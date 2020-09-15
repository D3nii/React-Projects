import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import "../Style/Slides.css";

function Slides() {
  return (
    <div id="slide">
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              marginTop: "20px",
              backgroundSize: "700px",
              width: "100%",
              height: "100pc",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url("https://hackernoon.com/images/92m3xrt.jpg")`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              marginTop: "20px",
              backgroundSize: "700px",
              width: "100%",
              height: "100pc",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url("https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_471,h_270/https://taqadam.io/wp-content/uploads/2019/11/COCO_test2015_000000002252-471x270.jpg")`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              marginTop: "20px",
              backgroundSize: "700px",
              width: "100%",
              height: "100pc",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url("https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/how-to-generate-structured-data-automatically-using-computer-vision-5f06c03959da0.png")`,
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
}

export default Slides;
