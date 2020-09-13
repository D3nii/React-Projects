import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import Email from "./Components/email";
import Services from "./Components/Services";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path="/demo">
          <NavBar />
          <Email />
        </Route>

        <Route path="/services">
          <NavBar />
          <Services />
          <Footer />
        </Route>

        <Route path="/">
          <NavBar />
          <HomePage />
          <Footer />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
