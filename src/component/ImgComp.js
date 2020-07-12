import React from "react";
import "./ImgComp.scss";

function ImgComp({ src }) {
  return <img src={src} alt="slide-img" className="imgStyles" />;
}

export default ImgComp;
