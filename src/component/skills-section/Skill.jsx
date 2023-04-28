import React from "react";

function Skill({ skill }) {
  return (
    <div className="skill">
      <span>{skill.text}</span>
      {<skill.iconComponent />}
    </div>
  );
}

export default Skill;
