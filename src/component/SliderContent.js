import React from "react";
import "./SliderContent.scss";

function SliderContent(props) {
  return(
    <div style={{transform:`translateX(-${props.translate}%)`, transition:`transform ease-out ${props.transition}s`}} />
  );
};

export default SliderContent;