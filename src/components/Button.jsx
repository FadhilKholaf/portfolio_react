import React from "react";

const Button = (props) => {
  return (
      <button
        data-aos={props.data}
        data-aos-delay={props.delay}
        data-aos-anchor-placement="top-bottom"
        type="button"
        className='btn border border-light text-light p-1 fs-6 fw-light'
      >
        {props.value}
      </button>
  );
};

export default Button;
