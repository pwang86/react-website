import React, { useState } from "react";
import classNames from "classnames";

function NavBar() {
  const [isVisible, setVisible] = useState(false);

  var navigationWrapperClass = classNames({
    "collapse navbar-collapse": true,
    "navigation-wrapper": true,
    visible: { isVisible }
  });

  return (
    <header className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Joni's Driving School
      </a>
      <button
        className="navbar-toggler"
        onClick={() => setVisible({ isVisible: !isVisible })}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={navigationWrapperClass}>
        <ul className="navbar-nav mr-auto">
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
