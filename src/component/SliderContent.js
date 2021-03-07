import React from "react";
import "./SliderContent.scss";

const SliderContent = props => {
  return(
    <div className="slider-content" style={{transform:`translateX(-${props.translate}px)`, transition:`transform ease-out ${props.transition}s`, width: `${props.width}px`}}>
      {props.children}
    </div>
  );
};

export default SliderContent;