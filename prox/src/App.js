import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar";

import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

import Testionials from "./Components/Testimonials";
import SlideShow from "./Components/SlideShow";
import Pipeline from "./Components/Pipeline";
import Footer from "./Components/Footer";

import "./Style/Media Queries/Ipad.css";
import "./Style/Media Queries/Mobile.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Page1 />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Page2 />

      <Page3 />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SlideShow />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>What our Clients say about us.</h1>
      <Testionials
        message="Hellow there."
        imageUrl="https://i.ytimg.com/vi/Z4ph23FCcLQ/hqdefault.jpg"
        name="Ms. A"
      />

      <Testionials
        message="Hi Ji."
        imageUrl="https://i.ytimg.com/vi/Z4ph23FCcLQ/hqdefault.jpg"
        name="Mr. B"
      />

      <Testionials
        message="Hello Ji."
        imageUrl="https://i.ytimg.com/vi/Z4ph23FCcLQ/hqdefault.jpg"
        name="Mr. C"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Pipeline />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
