import React, { useState } from "react";
import keys from "./keys";
import "./App.css";

let temp = "";

function App() {
  const [query, setQuery] = useState("");
  const [emoji, setEmoji] = useState({});

  let handleSubmit = function (e) {
    //update state
    e.preventDefault();

    setQuery(temp);

    trigger();
  };

  let handleChange = function (e) {
    //save in a variable
    temp = e.target.value;
  };

  let trigger = function () {
    fetch(`${keys.URL}?search=${temp}&access_key=${keys.API_KEY}`)
      .then((res) => res.json())
      .then((res) => setEmoji(res));

    console.log(emoji);
  };

  return (
    <>
      <h1 id="heading">Search Emojis!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} id="input" />
      </form>
      {typeof emoji != null ? (
        typeof emoji[0] != "undefined" ? (
          //Not undefined
          <div id="cont">
            {emoji.map((emo) => (
              <span className="show">
                {emo.character !== "🤭" ? emo.character : ""}
              </span>
            ))}
          </div>
        ) : (
          //undefined
          ""
        )
      ) : (
        ""
      )}
    </>
  );
}

export default App;
