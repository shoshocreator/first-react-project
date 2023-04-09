import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          Start React
        </a>
        <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                PORTFOILIO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div>
            <span>MENU</span>
            <span class="navbar-toggler-icon"> </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
