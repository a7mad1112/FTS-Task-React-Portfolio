import React, { useContext } from "react";
import "./contact-btn.css";
import { showContactContext } from "../Context/showContactContext";

const ContactButton = ({ textContent, fromNavigation }) => {
  const { setShowContactForm } = useContext(showContactContext);
  const toggleNav = () => {
    setShowContactForm(true)
  };

  return (
    <button
      onClick={() => {
        fromNavigation && toggleNav();
      }}
      className="contact-btn"
    >
      {textContent}
    </button>
  );
};

export default ContactButton;
