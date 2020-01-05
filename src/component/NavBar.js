import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import "./NavBar.css";
import logo from "../images/joni.png";

function NavBar({ t }) {
  const handleClick = lng => {
    i18n.changeLanguage(lng);
  };

  // navbar in mobile mode
  const [isVisible, setVisible] = useState(false);
  const [isClick, setClick] = useState(false);

  // set home scroll color
  const [homeColor, setHomeColor] = useState("nav-link text-light");
  const handleHomeActive = () => setHomeColor("nav-link text-primary");
  const handleHomeInactive = () => setHomeColor("nav-link text-light");

  // set introduction scroll color
  const [introColor, setIntroColor] = useState("nav-link text-light");
  const handleIntroActive = () => setIntroColor("nav-link text-primary");
  const handleIntroInactive = () => setIntroColor("nav-link text-light");

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
        <img className="logo" src={logo} alt="logo" />
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
            <Link
              activeClass="active"
              to="home"
              spy
              smooth
              duration={500}
              className={homeColor}
              onSetActive={handleHomeActive}
              onSetInactive={handleHomeInactive}
            >
              {t("home")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="introduction"
              spy
              smooth
              duration={500}
              className={introColor}
              onSetActive={handleIntroActive}
              onSetInactive={handleIntroInactive}
            >
              {t("intro")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy
              smooth
              duration={500}
              className={contactColor}
              onSetActive={handleContactActive}
              onSetInactive={handleContactInactive}
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav flex-row language-ul">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleClick("zh-CN")}
            >
              <img
                className="flag"
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/cn.svg"
                alt="Chinese"
              />
              中文
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => handleClick("en")}>
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

export default withNamespaces()(NavBar);
