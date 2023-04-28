import React, { useContext, useState } from "react";
import "./header.css";
import DisplayModeToggler from "../display-mode-toggler/DisplayModeToggler";
import LanguageToggler from "../language-toggler/LanguageToggler";
import Navbar from "../navbar/Navbar";
import MenuToggler from "../menu-toggler/MenuToggler";
import { languageContext } from "../Context/languageContext";


const Header = () => {
  const { lang } = useContext(languageContext);
  return (
    <header>
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-6 d-flex align-items-center">
            <h4 className="logo">
              <span
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="gradient-text"
              >
                {lang === "en" ? "Ahmed Alawneh" : "أحمد علاونة"}
              </span>
            </h4>
          </div>

          <div className="col-md-3 col-sm-4 col-4 d-flex justify-content-evenly align-items-center">
            <DisplayModeToggler />
            <LanguageToggler />
          </div>

          <div className="ms-auto col-md-6 col-sm-2 col-2 toggler-parent">
            <Navbar />
            <MenuToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
