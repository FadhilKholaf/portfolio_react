import React from "react";

import Fadhil from "../assets/images/fadhil.jpg";

const Profile = () => {
  return (
    <div data-aos="flip-up" data-aos-delay="100" className="container d-flex justify-content-center">
      <img className="rounded shadow-lg img-profile" src={Fadhil} alt={"fadhil.jpg"} />
    </div>
  );
};

export default Profile;
