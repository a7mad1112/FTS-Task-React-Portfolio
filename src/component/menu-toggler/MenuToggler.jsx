import React, { useRef, useContext } from "react";
import { navContext } from "../Context/navContext";
import "./menu-toggler.css";
const MenuToggler = () => {
  const togglerRef = useRef(null);
  const { showNav, setShowNav } = useContext(navContext);
  return (
    <div className="menu-icon-container">
      <div
        ref={togglerRef}
        className={`menu-icon`}
        onClick={() => {
          togglerRef.current.classList.toggle("menu-clicked");
          setShowNav(!showNav);
        }}
      >
        <span className="fade-left first-part w-50"></span>
        <span className="fade-right first-part w-50"></span>
        <span
          className={`toggler-1 sec-part ${showNav ? "x-nav" : null}`}
        ></span>
        <span
          className={`toggler-2 sec-part ${showNav ? "x-nav" : null}`}
        ></span>
        <span className="fade-left w-50 third-part"></span>
        <span className="fade-right w-50 third-part"></span>
      </div>
    </div>
  );
};

export default MenuToggler;
