import React, { useContext } from "react";
import "./contact-btn.css";
import { showContactContext } from "../Context/showContactContext";
import { navContext } from "../Context/navContext";

const ContactButton = ({ textContent, fromNavigation }) => {
  const { setShowContactForm } = useContext(showContactContext);
  const { setShowNav } = useContext(navContext);
  const closeNav = () => {
    setShowNav(false)
  };

  const showContactForm = () => {
    setShowContactForm(true);
  }

  return (
    <button
      onClick={() => {
        fromNavigation && closeNav();
        showContactForm();
      }}
      className="contact-btn"
    >
      {textContent}
    </button>
  );
};

export default ContactButton;
