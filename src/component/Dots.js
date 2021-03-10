import React, {memo} from 'react';
import './Dots.scss';

function Dot({active}) {
  return (
    <span className="dot" style={{background:active ? 'black' : 'white'}} />
  );
}

const MemoDot = memo(Dot);
function Dots({slides, activeIndex}) {
  return(
    <div className="dots">
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeIndex === i} />
      ))}
    </div>
  );
}

export default Dots;
