import React, { useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import './display-mode.css'
const DisplayModeToggler = () => {
  const mode = localStorage.getItem('displayMode') || 'dark';
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('displayMode', newMode);
    document.body.classList.toggle('light')
  }
  
  useEffect(() => {
    if (localStorage.getItem('displayMode') === 'light')
      document.body.classList.add('light');
  }, []);


  return (
    <label className="toggle-display-mode" htmlFor="toggle">
      <i onClick={toggleMode} className="bxs-sun">
        <BsFillSunFill />
      </i>
      <i onClick={toggleMode} className="bxs-moon">
        <BsFillMoonFill />
      </i>
      <span className="ball"></span>
    </label>
  );
};

export default DisplayModeToggler;
