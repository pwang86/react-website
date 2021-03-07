import React from "react";
import "./ImgComp.scss";

function ImgComp({ url }) {
  return <img src={url} alt="slide-img" className="imgStyles" />;
}

export default ImgComp;
