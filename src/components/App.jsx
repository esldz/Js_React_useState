import React, { useState } from "react";
import ReactDOM from "react-dom";

var count = 0;

function App() {
  const [count, setCount] = useState(100);

  function increase() {
    //count++;
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
