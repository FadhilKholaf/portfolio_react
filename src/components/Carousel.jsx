import React, { useState, useEffect } from "react";

import Button from "./Button";
import NavItem from "./NavItem";

const Carousel = () => {
  const [activeSection, setActiveSection] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-spy-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (useState === null) {
          setActiveSection("Experience");
        } else if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("click", handleScroll);
    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, []);

  return (
    <div
      data-aos="zoom-in-right"
      className="align-self-end p-0 container d-flex justify-content-center row row-cols-1 "
    >
      <div className="p-0">
        <ul className="nav d-flex justify-content-between">
          <NavItem
            id="#Skills"
            title="Skills"
            active={activeSection === "Skills"}
          />
          <NavItem
            id="#Experience"
            title="Experience"
            active={activeSection === "Experience"}
          />
          <NavItem
            id="#Education"
            title="Education"
            active={activeSection === "Education"}
          />
          <NavItem
            id="#Certificates"
            title="Certificates"
            active={activeSection === "Certificates"}
          />
        </ul>
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-smooth-scroll="true"
        className="container scrollable-scrollspy overflow-hidden row row-cols-1 border border-warning rounded p-0"
        tabIndex="0"
      >
        <div
          id="Skills"
          className="col min-height px-2 py-2 scroll-spy-section"
        >
          <div className="d-flex flex-wrap grid gap-2">
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
        <div
          id="Experience"
          className="col px-2 py-2 min-height scroll-spy-section"
        >
          <div className="d-flex flex-wrap grid gap-2">
            <Button value="Software Engineering student" />
            <Button value="Video editor freelancer" />
          </div>
        </div>
        <div
          id="Education"
          className="col px-2 py-2 min-height scroll-spy-section"
        >
          <div className="d-flex flex-wrap grid gap-2">
            <Button value="SDI Al-Munawwar" />
            <Button value="MTsN 1 Tulungagung" />
            <Button value="SMK Telkom Malang" />
          </div>
        </div>
        <div
          id="Certificates"
          className="col px-2 py-2 min-height scroll-spy-section"
        >
          <div className="d-flex flex-wrap grid gap-2">
            <Button value="Kaggle pandas course" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
