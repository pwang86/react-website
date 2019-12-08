import React, { useState } from "react";

function NavBar() {
  const [isVisible, setVisible] = useState(false);
  const [isClick, setClick] = useState(false);

  return (
    <header className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Joni's Driving School
      </a>
      <button
        className={isClick ? "navbar-toggler collapsed" : "navbar-toggler"}
        onClick={() => {
          setVisible({ isVisible: !isVisible });
          setClick({ isClick: !isClick });
        }}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={
          isVisible
            ? "navbar-collapse collapse show"
            : "navbar-collapse collapse"
        }
      >
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
