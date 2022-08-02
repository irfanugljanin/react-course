import React from "react";
import "./style.css";
import { useState } from "react";

const Counter = (props) => {
  let [counter, setCounter] = useState(0);

  function incrementor(e) {
    setCounter(counter + 1);
  }

  function decrementor(e) {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <button onClick={incrementor}>+</button>
      <button onClick={decrementor}>-</button>
      <h2>{counter}</h2>
    </div>
  );
};

export default Counter;
