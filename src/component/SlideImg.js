import React from "react";
import "./SlideImg.scss";

function SlideImg({src}) {
  return (
    <div style={{backgroundImage:`url(${src})`}} className="imgStyles" />
  );
}

export default SlideImg;