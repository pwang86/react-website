import React, {memo} from "react";
import "./SlideImg.scss";

function SlideImg(props) {
  return (
    <div style={{backgroundImage:`url(${props.content})`, width:`${props.width}px`}} className="imgStyles" />
  );
}

export default memo(SlideImg);