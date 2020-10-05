import React from "react";

import "../Style/Page3CardsRight.css";

class Page3Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page3_right">
        <h2 className="page3_heading_right">{this.props.heading}</h2>
        <p id="page3_body_right">{this.props.body}</p>
      </div>
    );
  }
}

export default Page3Cards;
