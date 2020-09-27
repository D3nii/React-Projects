import React from "react";

import Page2Cards from "./Page2Cards";

import "../Style/Page2.css";

class Page2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page2">
        <div id="main2">
          What type of{" "}
          <span style={{ color: "darkcyan" }}>Annotation Services</span> We
          provide
        </div>
        <div id="leftover2">
          Our skilled workforce bakes the following types of Annotation, which
          passes multiple quality checks before feeding them to your Machine
          Learning models.
        </div>

        <Page2Cards
          heading="Lines"
          body="For Main roads / Lanes for the self-driving car technology."
        />

        <Page2Cards
          heading="Bounding Boxes"
          body="For object detection, localization using 2-dimensional or 3-dimensional bounding boxes."
        />

        <Page2Cards
          heading="Points"
          body="For key point estimation in problems in Pose Estimation or Facial key points Estimation."
        />

        <Page2Cards
          heading="Polygons"
          body="For applications like semantic and instance segmentation."
        />

        <Page2Cards
          heading="Classification"
          body="For classification of images to assign them different classes."
        />

        <Page2Cards
          heading="Tracking"
          body="For the problems as Surveillance, Monitoring and Enforcement, detecting and tracking objects in videos."
        />
      </div>
    );
  }
}

export default Page2;
