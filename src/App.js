import React, { useState } from "react";
import "./styles.css";

var animalsDictionary = {
  "🐒": "Monkey",
  "🐯": "Tiger",
  "🐼": "Panda",
  "🐊": "Crocodile",
  "🦍": "Gorilla",
  "🦘": "Kangaroo",
  "🦏": "Rhino"
};

var animalsInZoo = Object.keys(animalsDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var emojiInput = event.target.value;
    var emojiMeaning = animalsDictionary[emojiInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this in our Emozoo";
    } else {
      emojiMeaning = "We have " + emojiMeaning + " in our EmoZoo";
    }
    setEmoji(emojiMeaning);
  }

  function emojiClickHandler(animal) {
    // console.log(animal);
    setEmoji(animalsDictionary[animal]);
  }
  return (
    <div className="App">
      <h1>🏕️ EmoZooo 🏕️</h1>
      <div>
        <p>Welcome to Emozooo</p>
        <p>Search for your favorite animal in EmoZoo</p>
        <input onChange={emojiInputHandler}></input>
        <p>{emoji}</p>
        <p>Checkout our latest attraction at EmoZooo</p>
        {animalsInZoo.map((animal, index) => {
          return (
            <span
              onClick={() => emojiClickHandler(animal)}
              key={index}
              style={{ margin: "0.5rem", cursor: "pointer" }}
            >
              {animal}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
