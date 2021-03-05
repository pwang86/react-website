import React from "react";
import "./SlideImg.scss";

function SlideImg({content}) {
  return (
    <div style={{backgroundImage:`url(${content})`}} className="imgStyles" />
  );
}

export default SlideImg;