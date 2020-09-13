import React from "react";

import "../Style/Cards.css";

class Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="card">
        <span id="cheading">{this.props.name}</span>
        <br />
        <span id="body">
          <ul>
            {this.props.body.map((b) => (
              <li>{b}</li>
            ))}
          </ul>
        </span>
      </div>
    );
  }
}

export default Cards;
