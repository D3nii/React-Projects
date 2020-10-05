import React from "react";

import "../Style/Page3CardsLeft.css";

class Page3Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page3_left">
        <h2 className="page3_heading_left">{this.props.heading}</h2>
        <p id="page3_body_left">{this.props.body}</p>
      </div>
    );
  }
}

export default Page3Cards;
