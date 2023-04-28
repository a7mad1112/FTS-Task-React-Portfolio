import React, { useEffect } from "react";
import "./language-toggler.css";
import { useContext } from "react";
import { languageContext } from "../Context/languageContext";
const LanguageToggler = () => {
  const { lang, setLang } = useContext(languageContext);
  useEffect(() => {
    document.querySelector("html").setAttribute("lang", lang);
    document
      .querySelector("html")
      .setAttribute("dir", lang === "en" ? "ltr" : "rtl");
  }, [lang]);

  const handleClick = () => {
    if (lang === "en") {
      localStorage.setItem("lang", "ar");
      document.querySelector("html").setAttribute("lang", "ar");
      document.querySelector("html").setAttribute("dir", "rtl");
      setLang("ar");
    } else if (lang === "ar") {
      localStorage.setItem("lang", "en");
      document.querySelector("html").setAttribute("lang", "en");
      document.querySelector("html").setAttribute("dir", "ltr");
      setLang("en");
    }
  };

  return (
    <span onClick={handleClick} className="chose-lang ms-2">
      {lang === "en" ? "AR" : "EN"}
    </span>
  );
};

export default LanguageToggler;
