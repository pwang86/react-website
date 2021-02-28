import React, { useState, useEffect } from "react";
import "./Slider2.scss";
import SlideImg from "./SlideImg";
import SliderContent from "./SliderContent";
import Dot from "./Dot";

function Slider2() {

  const getWidth = () => window.innerWidth;

  const[state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });
  const {activeIndex, translate, transition} = state;

  const imgs = [
    '../images/L.jpg',
    '../images/window.jpg',
    '../images/mirror.jpg'
  ];

  let goRight = () => {
    if (activeIndex === imgs.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    });
  }

  let goLeft = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (imgs.length - 1) * getWidth(),
        activeIndex: imgs.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    });
  }


/*
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
*/
  return (
    <div className="home slider">
      <div className="overlay" />
      <SliderContent translate={translate} transition={transition} width={getWidth * imgs.length}>
        {imgs.map((item, index) => {
          return (
            <SlideImg key={index} src={item} />
          );
        })}
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
