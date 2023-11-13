import React from "react";

const Icon = (props) => {
  return (
    <a href={props.link}>
      <img
        data-aos="fade-left"
        data-aos-delay={props.delay}
        src={props.icon}
        alt=""
        className="img-icon"
      />
    </a>
  );
};

export default Icon;
