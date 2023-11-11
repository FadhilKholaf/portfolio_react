import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        data-aos={props.animate}
        data-aos-delay={props.delay}
        type="button"
        className='btn btn-outline-warning text-light p-1 fw-bold'
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
