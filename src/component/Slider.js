import React from "react";
import "./Slider.scss";
import s1 from "../images/L.jpg";
import s2 from "../images/window.jpg";
import s3 from "../images/mirror.jpg";

function Slider() {
  return (
    <div id="carouselIndicators" className="carousel slide slide-custom" data-ride="carousel">
      <div className="overlay" />
      <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselIndicators" data-slide-to="1" />
        <li data-target="#carouselIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={s1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={s2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={s3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
