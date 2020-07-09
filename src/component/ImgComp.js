import React from "react";
import "./ImgComp.css";

function ImgComp({ src }) {
  return <img src={src} alt="slide-img" className="imgStyles" />;
}

export default ImgComp;
