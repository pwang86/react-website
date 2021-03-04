import React from 'react';
import './Dots.scss';

function Dot({active}) {
  return (
    <span className="dot" style={{background:active ? 'black' : 'white'}} />
  );
}

function Dots({slides, activeIndex}) {
  return(
    <div className="dots">
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  );
}

export default Dots;
