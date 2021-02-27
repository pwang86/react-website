import React, { useState, useEffect } from "react";
import "./Slider2.scss";
import ImgComp from "./ImgComp";
import SliderContent from "./SliderContent";
import Dot from "./Dot";
import s1 from "../images/L.jpg";
import s2 from "../images/window.jpg";
import s3 from "../images/mirror.jpg";

function Slider2() {

  const [slideIndex, setSlideIndex] = useState(0);

  const[state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });
  const {activeIndex, translate, transition} = state;

  const sliderArr = [
    <ImgComp src={s1} />,
    <ImgComp src={s2} />,
    <ImgComp src={s3} />,
  ];

  let dotArr = [
    <Dot dotId="0" slideId={`${slideIndex}`} />,
    <Dot dotId="1" slideId={`${slideIndex}`} />,
    <Dot dotId="2" slideId={`${slideIndex}`} />,
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 4000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = () => {
    slideIndex === (sliderArr.length - 1) ? setSlideIndex(0): setSlideIndex(slideIndex + 1);
  };

  return (
    <div className="home slider">
      <div className="overlay" />
      <SliderContent translate={translate} transition={transition}>
        <div className="slide-item" style={{ display: slideIndex === 0 ? 'block': 'none' }}>{sliderArr[0]}</div>
        <div className="slide-item" style={{ display: slideIndex === 1 ? 'block': 'none' }}>{sliderArr[1]}</div>
        <div className="slide-item" style={{ display: slideIndex === 2 ? 'block': 'none' }}>{sliderArr[2]}</div>
      </SliderContent>
      

      <div className="row">
        {dotArr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default Slider2;