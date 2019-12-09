import React, { useState } from "react";
import classNames from "classnames";
import "./NavBar.css";

function NavBar() {
  const [isVisible, setVisible] = useState(false);
  const [isClick, setClick] = useState(false);

  var navWrapperClass = classNames("navbar-collapse collapse", {show: isVisible});
  var burgerMenuClass = classNames("navbar-toggler",{collapsed: !isClick});

  return (
    <header className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Joni's Driving School
      </a>
      <button
        className={burgerMenuClass}
        type="button"
        onClick={() => {
          setVisible(!isVisible);
          setClick(!isClick);
        }}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={navWrapperClass}
      >
        <ul className="navbar-nav mr-auto nav--ul">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Introduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">English</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">中文</a>
          </li>
        </ul>
      </div>
    </header>
  );
} 

export default NavBar;