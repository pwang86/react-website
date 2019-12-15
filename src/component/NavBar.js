import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  // navbar in mobile mode
  const [isVisible, setVisible] = useState(false);
  const [isClick, setClick] = useState(false);

  // set introduction scroll color

  // set contact scroll color
  const [contactColor, setContactColor] = useState("nav-link text-light");
  const handleContactActive = () => setContactColor("nav-link text-primary");
  const handleContactInactive = () => setContactColor("nav-link text-light");

  var navWrapperClass = classNames("customized-nav navbar-collapse collapse ", {
    show: isVisible
  });
  var burgerMenuClass = classNames("navbar-toggler", { collapsed: !isClick });

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
      <div className={navWrapperClass}>
        <ul className="navbar-nav mr-auto flex-row menu-ul">
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
        <ul className="navbar-nav flex-row language-ul">
          <li className="nav-item">
            <a className="nav-link">
              <img
                className="flag"
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/cn.svg"
                alt="Chinese"
              />
              中文
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <img
                className="flag"
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/au.svg"
                alt="English"
              />
              English
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
