import React from "react";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link p-0" href={props.id}>
        <p className="fs-5 fw-light">{props.title}</p>
      </a>
    </li>
  );
};

export default NavItem;
