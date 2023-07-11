import React from "react";
import Sun from "../images/icon-sun.svg";
import Moon from "../images/icon-moon.svg";

const HeaderTitle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1 className="text-uppercase text-light">Todo</h1>

      <img
        src={darkMode ? Sun : Moon}
        alt="icon"
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

export default HeaderTitle;
