import React from "react";
import { Link } from "react-router-dom";
import { RiGithubLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import "./social-icons.css";

const SocialIcons = ({ isBorder }) => {
  return (
    <div
      className={`social-icons m-auto d-flex align-items-center justify-content-center ${
        isBorder === true ? "isBorder" : null
      }`}
    >
      <Link
        className="icon-event"
        to="https://github.com/a7mad1112"
        target="_blank"
      >
        <i>
          <RiGithubLine />
        </i>
      </Link>
      <Link
        className="icon-event"
        to="https://www.linkedin.com/in/ahmad-alawneh-a92306250/"
        target="_blank"
      >
        <i>
          <ImLinkedin2 />
        </i>
      </Link>
      <Link
        className="icon-event"
        to="https://t.me/ProgrammerLevi"
        target="_blank"
      >
        <i>
          <FaTelegramPlane />
        </i>
      </Link>
    </div>
  );
};

export default SocialIcons;
