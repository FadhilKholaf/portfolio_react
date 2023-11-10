import React from "react";
import Profile from "./Profile";

const Carousel = () => {
  return (
    <div className="align-self-end">
      <div>
        <ul className="nav nav-pills d-flex justify-content-between">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#1">
              <p className="fs-2 fw-light">Skills</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#1">
              <p className="fs-2 fw-light">Experience</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#1">
              <p className="fs-2 fw-light">Education</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#1">
              <p className="fs-2 fw-light">Certificate</p>
            </a>
          </li>
        </ul>
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-smooth-scroll="true"
        className="container scrollable-scrollspy overflow-hidden row row-cols-1"
        tabIndex="0"
      >
        <div id="1" className="col">
          <Profile />
        </div>
        <div id="2" className="col">
          <Profile />
        </div>
        <div id="3" className="col">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
