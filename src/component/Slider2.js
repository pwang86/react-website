import React, { useState} from "react";
import "./Slider2.scss";
import SlideImg from "./SlideImg";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import s1 from "../images/L.jpg";
import s2 from "../images/window.jpg";
import s3 from "../images/mirror.jpg";

function Slider2() {

  const imgsArr = [s1,s2, s3];

  const getWidth = () => window.innerWidth;

  const[state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0
  });
  const {translate, transition, activeIndex} = state;

  let goRight = () => {
    if (activeIndex === imgsArr.length - 1) {
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
        translate: (imgsArr.length - 1) * getWidth(),
        activeIndex: imgsArr.length - 1
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
      <SliderContent translate={translate} transition={transition} width={getWidth() * imgsArr.length}>
        {imgsArr.map((img, index) => {
          return (<SlideImg key={index} content={img} />);
        })}
      </SliderContent>
      
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>

      <Dots slides={imgsArr} activeIndex={activeIndex} />
    </div>
  );
}

export default Slider2;
