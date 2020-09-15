import React from "react";
import { Link } from "react-router-dom";
import "../Style/Bar.css";

class Bar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="bar">
        Let's annotate some images!
        <div id="sbar">
          We can start on a small batch of your image or videos for free. No
          hassle and no commitment.
        </div>
        <Link id="hbar" to="/demo">
          <button id="bbotton">Hello Ji</button>
        </Link>
      </div>
    );
  }
}

export default Bar;
