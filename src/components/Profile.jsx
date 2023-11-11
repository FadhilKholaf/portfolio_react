import React from "react";

import Fadhil from "../assets/fadhil.jpg";

const Profile = () => {
  return (
    <div data-aos="fade-right" className="container d-flex justify-content-center">
      <img className="rounded shadow-lg img-profile" src={Fadhil} alt={"fadhil.jpg"} />
    </div>
  );
};

export default Profile;
