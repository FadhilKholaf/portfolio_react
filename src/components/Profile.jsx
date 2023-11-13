import React from "react";

import Fadhil from "../assets/images/fadhil.jpg";
import TextScramble from "./TextScramble";

const Profile = () => {
  return (
    <div
      data-aos="flip-up"
      data-aos-delay="100"
      className="container d-flex justify-content-center row row-cols-1 p-0"
    >
      <div className="col d-flex justify-content-center p-0 m-0">
        <img
          className="rounded shadow-lg img-profile"
          src={Fadhil}
          alt="fadhil.jpg"
        />
      </div>
      <div className="col d-flex justify-content-center align-items-end h-100 position-absolute">
        <TextScramble />
      </div>
    </div>
  );
};

export default Profile;
