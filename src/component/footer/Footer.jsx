import React, { useContext } from "react";
import { HiArrowUp } from "react-icons/hi";
import SocialIcons from "../social-icons/SocialIcons";
import './footer.css'
import { Link } from "react-router-dom";
import { languageContext } from "../Context/languageContext";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { lang } = useContext(languageContext);
  return (
    <footer className="py-4 mt-5">
      <div className="container text-center">
        <div className="top-arrow" onClick={handleScrollToTop}>
          <i className="icon-event">
            <HiArrowUp />
          </i>
        </div>
        <div className="m-auto" style={{ fontSize: "1.2rem" }}>
          <SocialIcons isBorder={true} />
        </div>
        <Link to="https://t.me/ProgrammerLevi">
          {
            lang === 'en' ? (
              "Join my Telegram channel for web development tips and resources"
            ) : (
              "انضم إلى قناة Telegram الخاصة بي"
            )
          }
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
