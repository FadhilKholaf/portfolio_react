import React from "react";

import Icon from "./Icon";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

const Social = () => {
  return (
    <div data-aos="zoom-in-right" className="p-0 align-self-center d-flex grid column-gap-2">
      <Icon
        delay="100"
        icon={Linkedin}
        link="https://www.linkedin.com/in/muhammad-fadhil-kholaf-7b1a7a270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      />
      <Icon
        delay="100"
        icon={Instagram}
        link="https://instagram.com/tlg69.fadhil"
      />
    </div>
  );
};

export default Social;
