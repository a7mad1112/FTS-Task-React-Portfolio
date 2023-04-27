import React, { useContext } from "react";
import { languageContext } from "../Context/languageContext";
import ContactButton from "../contact-button/ContactButton";
import "./navbar.css";

const Navbar = ({ showNav }) => {
  const { lang } = useContext(languageContext);
  const scrollToId = (e) => {
    document
      .getElementById(e.target.dataset.to)
      .scrollIntoView({ behavior: "smooth" }, true);
    document.querySelector(".menu-clicked").classList.remove("menu-clicked");
  };
  const sections = [
    {
      name: lang === "en" ? "About" : "من أنا",
      key: 1,
      className: "sec-nav",
      linkTo: "info-section",
    },
    {
      name: lang === "en" ? "Projects" : "المشاريع",
      key: 2,
      className: "sec-nav",
      linkTo: "projects-section",
    },
    {
      name: lang === "en" ? "Skills" : "المهارات",
      key: 3,
      className: "sec-nav",
      linkTo: "skills-section",
    },
  ];


  return (
    <nav>
      <ul className={showNav ? "activate-ul" : null}>
        {sections.map((sec) => (
          <li
            onClick={scrollToId}
            data-to={sec.linkTo}
            key={sec.key}
            className={sec.className}
          >
            {sec.name}
          </li>
        ))}
        <li className="contact">
          <ContactButton
            fromNavigation={true}
            textContent={lang === "en" ? "Contact" : "للتواصل"}
          ></ContactButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
