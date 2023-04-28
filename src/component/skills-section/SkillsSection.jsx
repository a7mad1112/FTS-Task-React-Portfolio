import React, { useContext } from "react";
import { languageContext } from "../Context/languageContext";
// icons:
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import Skill from "./Skill";
import './skills.css'
// icons component
const HtmlIcon = () => (
  <i>
    <FaHtml5 />
  </i>
);
const CssIcon = () => (
  <i>
    <FaCss3Alt />
  </i>
);
const JsIcon = () => (
  <i>
    <FaJsSquare />
  </i>
);
const ReactIcon = () => (
  <i>
    <FaReact />
  </i>
);
const ReduxIcon = () => (
  <i>
    <SiRedux />
  </i>
);
const GitIcon = () => (
  <i>
    <FaGitAlt />
  </i>
);
const TailwindCssIcon = () => (
  <i>
    <SiTailwindcss />
  </i>
);
const SassIcon = () => (
  <i>
    <FaSass />
  </i>
);


// Skills Object

const skills = [
  {
    text: "HTML",
    iconComponent: HtmlIcon,
    key: 1,
  },
  {
    text: "CSS",
    iconComponent: CssIcon,
    key: 2,
  },
  {
    text: "JavaScript",
    iconComponent: JsIcon,
    key: 3,
  },
  {
    text: "React",
    iconComponent: ReactIcon,
    key: 4,
  },
  {
    text: "Redux",
    iconComponent: ReduxIcon,
    key: 5,
  },
  {
    text: "Git",
    iconComponent: GitIcon,
    key: 6,
  },
  {
    text: "Tailwind",
    iconComponent: TailwindCssIcon,
    key: 7,
  },
  {
    text: "SASS",
    iconComponent: SassIcon,
    key: 8,
  },
];

const SkillsSection = () => {
  const { lang } = useContext(languageContext);
  return (
    <section id="skills-section" className="py-5">
      <div className="container">
        <div className="text-center text-white">
          <h2 className=" fw-bold fs-3">{lang === 'en' ? 'Skills' : 'المهارات'}</h2>
        </div>
        <div className="skills-parent mt-4">
          {skills.map((skill) => (
            <Skill key={skill.key} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
