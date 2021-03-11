import React, {useState, useEffect, useRef} from "react";
import "./Slider2.scss";
import SlideImg from "./SlideImg";
import SliderContent from "./SliderContent";
import Dots from "./Dots";

const getWidth = () => window.innerWidth;

const Slider2 = props => {

  const imgsArr = props.slides;
  const firstSlide = imgsArr[0];
  const secondSlide = imgsArr[1];
  const thirdSlide = imgsArr[2]; 

  const[state, setState] = useState({
    translate: getWidth(),
    transition: 0.45,
    activeIndex: 0,
    _slides: [thirdSlide, firstSlide, secondSlide]
  });
  const {translate, transition, activeIndex, _slides} = state;
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  // const sliderRef = useRef();

  useEffect(() => {
    autoPlayRef.current = goRight;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    // const slider = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    }

    const smooth = () => {
      transitionRef.current();
    }

    const resize = () => {
      resizeRef.current();
    }

    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);
    const interval = setInterval(play, 3000);
    return () => {
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (transition === 0) {
      setState({...state, transition: 0.45});
    }
  }, [transition]);

  const handleResize = () => {
    setState({...state, translate: getWidth(), transition: 0});
  }

  const smoothTransition = () => {
    let _slides = [];
    
    if (activeIndex === imgsArr.length - 1)
      _slides = [secondSlide, thirdSlide, firstSlide];
    else if (activeIndex === 0) 
      _slides = [thirdSlide, firstSlide, secondSlide];
    else
      _slides = imgsArr.slice(activeIndex - 1, activeIndex + 2);

    setState({
      ...state,
      _slides,
      transition:0,
      translate: getWidth()
    });
  }

  const goRight = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeIndex: activeIndex === imgsArr.length - 1 ? 0 : activeIndex + 1
    });
  }

  const goLeft = () => {
    setState({
      ...state,
      translate: 0,
      activeIndex: activeIndex === 0 ? imgsArr.length - 1 : activeIndex - 1
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
      <SliderContent translate={translate} transition={transition} width={getWidth() * _slides.length}>
        {_slides.map((slide, index) => {
          return (<SlideImg width={getWidth()} key={index} content={slide} />);
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
