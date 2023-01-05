import React from "react";

function Function() {
  function buttonClick() {
    console.log("button is Click");
  }
  return (
    <div>
      <button onClick={buttonClick}>click me</button>
    </div>
  );
}

export default Function;
