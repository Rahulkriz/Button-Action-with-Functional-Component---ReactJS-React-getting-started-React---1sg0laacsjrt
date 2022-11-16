import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState();
  const [click, setClick] = useState(false);

  function clicked() {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
    setClick(true);

    //console.log("button clicked");
  }

  const Para = () => {
    return <p id="para">{para}</p>;
  };
  return (
    <div id="main">
      <button id="click" onClick={clicked}>
        Click me
      </button>
      {click && <Para />}
    </div>
  );
}

export default App;
