import React from "react";
import { Link } from "react-router-dom";
function Btn({ btn }) {
  return (
    <Link
      to={`${btn.link}`}
      rel="noreferrer"
      target="_blank"
      className="project-btn"
      style={{ backgroundColor: btn.backColor }}
    >
      {btn.text}
    </Link>
  );
}

export default Btn;
