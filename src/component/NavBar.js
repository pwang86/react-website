import React from "react";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <ul className="navbar-nav">
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
      </div>
    </nav>
  );
}

export default NavBar;
