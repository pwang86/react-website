import React, { useState} from "react";
import "./Slider2.scss";
import ImgComp from "./ImgComp";
import SliderContent from "./SliderContent";
import Dots from "./Dots";

function Slider2(props) {

  const getWidth = () => window.innerWidth;

  const[state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0
  });
  const {translate, transition, activeIndex} = state;

  let goRight = () => {
    if (activeIndex === props.slides.length - 1) {
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
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
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
      <SliderContent translate={translate} transition={transition} width={getWidth() * props.slides.length}>
        {props.slides.map((slide, index) => {
          return (
            <ImgComp key={index + index} src={slide} />
          );
        })}
      </SliderContent>
      
      <button id="goLeft" handleClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button id="goRight" handleClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>

      <Dots slides={props.slides} activeIndex={activeIndex} />
    </div>
  );
}

export default Slider2;
