import React from "react";
import "./SlideImg.scss";

function SlideImg(props) {
  return (
    <div style={{backgroundImage:`url(${props.content})`}} className="imgStyles" />
  );
}

export default SlideImg;