import React, { useState, useEffect } from "react";
import "./slider.css";
import ImgComp from "./ImgComp";
import Dot from "./Dot";
import s1 from "../images/test.jpg";
import s2 from "../images/train.jpg";
import s3 from "../images/book.jpg";

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
    }, 3000);
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
    <div className="slider">
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
