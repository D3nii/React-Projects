import React from "react";

import "../Style/Page3.css";

import Page3CardsRight from "./Page3CardsRight";
import Page3CardsLeft from "./Page3CardsLeft";

class Page3 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="main3">
          We <span style={{ color: "darkcyan" }}>Focus </span>On
        </div>

        <div>
          <Page3CardsRight
            heading="Quality"
            body="We deeply know that Machine Learning systems are Garbage In, Garbage Out Models. We have Developed Multiple quality gates which are necessary to pass before data can be considered for training of automatic and manual"
          />

          <Page3CardsLeft
            heading="Securtiy and Privacy"
            body="We value our customers, security and privacy. We provide both on-site and off-site data hosting supoort so that according to the customer, data may never leave their premises"
          />

          <Page3CardsRight
            heading="Timely Deliveries"
            body="We have a large skilled workforce fully managed by team leads to ensure timely deliveries."
          />

          <Page3CardsLeft
            heading="Lowest Prices"
            body="We hire and train poeple from developing countries which helps us keep our cost lowest and provide some source of income to the people in need"
          />

          <Page3CardsRight
            heading="Speed"
            body="We couple human annotators with automatic machine learning based labellers to speed up the labelling process 10X"
          />
        </div>
      </div>
    );
  }
}

export default Page3;
