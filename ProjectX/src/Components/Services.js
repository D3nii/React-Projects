import React from "react";

import "../Style/Services.css";

import NavBar from "./NavBar";
import Card from "./Cards";
import SmallCards from "./SmallCards";
import Footer from "./Footer";

class Services extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div id="heading">About Us?</div>
        Arrow neecheeeee, kaafi neeche
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card
          name="AI Consultancy Services"
          body={[
            "Create multiple projects, split work into batches and create annotation tasks.",
            "Annotate your images, bring your team or outsource to our best cloud workers.",
            "Create custom interfaces and annotation workflows specific to your use cases.",
            "Annotate images with Bounding Boxes, Polygons, Masks, Key points, and more.",
          ]}
        />
        <Card
          name="Image Annotation Team"
          body={[
            "Domain Experts categorize and classify objects according to your taxonomies.",
            "Talented, efficient, and intelligent cloud workers create high quality image annotations.",
            "Experienced remote team managers ensure cloud worker operations run smoothly.",
            "Globally deployed to provide 24/7/365 coverage, and guaranteed response times.",
          ]}
        />
        <div id="heading">Our Work?</div>
        <SmallCards
          name="Dedicated CSM"
          body="A dedicated CSM will be with you every step of the way to provide support, annotator training, interface customisations and more."
        />
        <SmallCards
          name="Affordable Pricing"
          body="We strive to provide the most value in the image annotation industry. We provide simple and fair pricing with no exorbitant initiation fees."
        />
        <SmallCards
          name="Scaling Annotations"
          body="Since 2019, we have been recruiting and training image annotators. Our investments in training, coaching makes our project scaling predictable."
        />
        <br />
        <SmallCards
          name="Quality Control"
          body="Annotations are checked by QA at the tag level, then at the dataset level and optionally by using a model trained on your data."
        />
        <SmallCards
          name="Dataset Platform"
          body="Access your projects, data and annotations in real time as they are being created. Feedback tools ensure everything stays on track."
        />
        <SmallCards
          name="Your Requirements"
          body="Custom dataset visualisation tools and communication tools ensures requirements are fully understood before and during your projects."
        />
        <br />
        <br />
        <br />
        <hr />
      </>
    );
  }
}

export default Services;
