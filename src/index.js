import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import Email from "./Components/email";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path="/demo">
          <NavBar />
          <Email />
        </Route>

        <Route path="/Login">
          <h1>Login Page</h1>
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
