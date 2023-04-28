import React, { useContext } from "react";
import Btn from "./Btn";
import { languageContext } from "./../Context/languageContext";
/*
  project : key, img, websiteLink, githubLink
*/

const Project = ({ project }) => {
  const { lang } = useContext(languageContext);
  return (
    <div
      className="project my-5 rounded-2 "
    >
      <div className="project-img w-100">
        <img src={project.img} alt="project-img" />
      </div>
      <div className="project-btns">
        <Btn
          btn={{
            text: lang === "en" ? "Visit Website" : "زيارة الموقع",
            backColor: "#3b5bdb",
            link: project.deploymentLink,
          }}
        />
        <Btn
          btn={{
            text: "Github",
            backColor: "transparent",
            link: project.repoLink,
          }}
        />
      </div>
    </div>
  );
};

export default Project;
