import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Particles from "react-particles-js";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
