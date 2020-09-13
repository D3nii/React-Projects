import React from "react";

import "../Style/SmallCards.css";

class Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="sCard">
        <span id="sheading">{this.props.name}</span>
        <br />
        <span id="sbody">{this.props.body}</span>
      </div>
    );
  }
}

export default Cards;
