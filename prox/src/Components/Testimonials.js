import React from "react";

import "../Style/Testimonials.css";

class Testimonial extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="testimonial">
        <div id="invertedComma">"</div>
        <div id="TestimonialWriting">{this.props.message}</div>
        <div id="baaar">
          {" "}
          <hr />{" "}
        </div>
        <img id="testimonialPicture" src={this.props.imageUrl} />
        <div id="testimonialName">{this.props.name}</div>
      </div>
    );
  }
}

export default Testimonial;
