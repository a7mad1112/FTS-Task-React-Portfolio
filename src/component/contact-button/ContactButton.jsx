import React from "react";
import './contact-btn.css'

const ContactButton = ({textContent, fromNavigation}) => {

  const toggleNav = () => {
    // dispatch(navUiActions.toggle());
    document.querySelector('.menu-clicked').classList.remove('menu-clicked');
  }

  return (
    <button
      onClick={() => {
        // dispatch(contactUIShowActions.toggle());
        fromNavigation && toggleNav();
      }}
      className="contact-btn"
    >
      {textContent}
    </button>
  );
};

export default ContactButton;
