import React from "react";

import Icon from "./Icon";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";
import Github from "../assets/images/github.png";
import Discord from "../assets/images/discord.png";

const Social = () => {
  return (
    <div
      data-aos="zoom-in-right"
      className="p-0 align-self-center d-flex grid column-gap-5"
    >
      <Icon
        delay=""
        icon={Linkedin}
        link="https://www.linkedin.com/in/muhammad-fadhil-kholaf-7b1a7a270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      />
      <Icon
        delay="500"
        icon={Github}
        link="https://github.com/FadhilKholaf"
      />
      <Icon
        delay="1000"
        icon={Instagram}
        link="https://instagram.com/tlg69.fadhil"
      />
      <Icon
        delay="1500"
        icon={Discord}
        link="https://discord.com/users/782123185566777384"
      />
    </div>
  );
};

export default Social;
