import React, { useState, useEffect } from "react";
import "./Slider.scss";
import ImgComp from "./ImgComp";
import Dot from "./Dot";
import s1 from "../images/L.jpg";
import s2 from "../images/window.jpg";
import s3 from "../images/mirror.jpg";

function Slider() {
  let sliderArr = [
    <ImgComp src={s1} />,
    <ImgComp src={s2} />,
    <ImgComp src={s3} />,
  ];

  const [x, setX] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      goRight();
    }, 4000);
    return () => clearInterval(interval);
  }, [x]);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  let dotArr = [
    <Dot dotId="0" slideId={`${x}`} />,
    <Dot dotId="1" slideId={`${x}`} />,
    <Dot dotId="2" slideId={`${x}`} />,
  ];

  return (
    <div className="home slider">
      <div className="overlay" />
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>

      <div className="row">
        {dotArr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}
/* style={{background: `(-index * 100 === ${x} ? "white" : "black")`}} */
export default Slider;
