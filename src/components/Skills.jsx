import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="d-flex flex-wrap grid gap-2">
      <Skill skill="Node JS" />
      <Skill skill="React JS" />
    </div>
  );
};

export default Skills;
