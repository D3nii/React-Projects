import React from "react";
import "./App.css";

particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});

function App() {
  return <div className="ALL"></div>;
}

export default App;
