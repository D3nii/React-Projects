import React from "react";

import "../Style/Page3Cards.css";

class Page3Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page3">
        <br></br>
        <div class="tooltip">
          <h2>{this.props.heading}</h2>
          <p class="tooltiptext">{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Page3Cards;
