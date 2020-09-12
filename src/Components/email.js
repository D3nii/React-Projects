import React from "react";
import "../Style/email.css";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_yKGEMt5T7fRFrV8zAN04b");

function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "hamza",
        "template_0426zfa",
        e.target,
        "user_yKGEMt5T7fRFrV8zAN04b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="App">
      <div className="hea">
        <h1>Request A demo!!</h1>
        <h4>
          To make sure we're a good fit for your project, we can start on a
          small batch of your annotations for free. No hassle and no commitment.
        </h4>
      </div>
      <form onSubmit={sendEmail}>
        <label>Full Name:</label>
        <input className="Input1" placeholder="Name" name="name" required />
        <label>Email:</label>
        <input className="Input2" placeholder="Email" name="email" required />
        <label>Your Message:</label>
        <input className="Input3" placeholder="Message" name="message" />
        <input className="Input4" type="submit" />
      </form>
    </div>
  );
}

export default Email;
