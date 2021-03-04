import React from 'react';
import './Dots.scss';

function Dot({active}) {
  return (
    <span className="dot" style={{background:active ? 'black' : 'white'} } />
  );
}

function Dots({activeIndex}) {
  return(

  );
}

export default Dots;
