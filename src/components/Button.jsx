import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        data-aos={props.animate}
        data-aos-delay={props.delay}
        data-aos-anchor-placement="top-bottom"
        type="button"
        className='btn btn-outline-warning text-light p-1 fs-6 fw-light'
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
