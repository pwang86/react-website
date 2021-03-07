import React from "react";
import "./ImgComp.scss";

function ImgComp(props) {
  return <img src={props.content} alt="slide-img" className="imgStyles" />;
}

export default ImgComp;
