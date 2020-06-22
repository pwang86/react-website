import React from "react";
import "./Dot.css";

function Dot({ dotId, slideId }) {
  let changedDotId = dotId * 100;

  return (
    <div
      className={
        "dot " + (changedDotId === Math.abs(slideId) ? "white" : "black")
      }
    />
  );
}

export default Dot;
