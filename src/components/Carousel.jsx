import React from "react";

import Button from "./Button";
import NavItem from "./NavItem";

const Carousel = () => {
  return (
    <div
      data-aos="zoom-in-right"
      className="align-self-end p-0 container d-flex justify-content-center row row-cols-1"
    >
      <div className="p-0">
        <ul className="nav d-flex justify-content-between">
          <NavItem id="#Skills" title="Skills"/>
          <NavItem id="#Experience" title="Experience"/>
          <NavItem id="#Education" title="Education"/>
          <NavItem id="#Certificates" title="Certificates"/>
        </ul>
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-smooth-scroll="true"
        className="container scrollable-scrollspy overflow-hidden row row-cols-1 rounded p-0"
        tabIndex="0"
      >
        <div id="Skills" className="col h-100 p-0">
          <div className="d-flex flex-wrap grid gap-2 py-2">
            <Button value="HTML" animate="fade-left" />
            <Button value="CSS" animate="fade-left" delay="100" />
            <Button value="JS" animate="fade-left" delay="200" />
            <Button value="Node JS" animate="fade-left" delay="300" />
            <Button value="React JS" animate="fade-left" delay="400" />
            <Button
              value="Adobe After Effect"
              animate="fade-left"
              delay="500"
            />
            <Button value="Adobe Illustrator" animate="fade-left" delay="600" />
            <Button value="Figma" animate="fade-left" delay="700" />
          </div>
        </div>
        <div id="Experience" className="col h-100 p-0">
          <div className="d-flex flex-wrap grid gap-2 py-2">
            <Button value="Software Engineering student" />
            <Button value="Video editor freelancer" />
          </div>
        </div>
        <div id="Education" className="col h-100 p-0">
          <div className="d-flex flex-wrap grid gap-2 py-2">
            <Button value="SDI Al-Munawwar" />
            <Button value="MTsN 1 Tulungagung" />
            <Button value="SMK Telkom Malang" />
          </div>
        </div>
        <div id="Certificates" className="col h-100 p-0">
          <div className="d-flex flex-wrap grid gap-2 py-2">
            <Button value="Kaggle pandas course" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
