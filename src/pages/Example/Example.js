import React from "react";
import "./Example.css";

function Example() {
  function handleClick() {
    console.log("hello!");
  }

  return (
    <div className="Example__container">
      {/* Put whatever you want in here for easy testing! */}
      <button onClick={handleClick}> Click Me! </button>
    </div>
  );
}

export default Example;
