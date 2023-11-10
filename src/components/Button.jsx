import React from "react";

const Button = (props) => {
  return (
    <div>
      <button type="button" class="btn btn-info">
        {props.skill}
      </button>
    </div>
  );
};

export default Button;
