import "./Options.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Switch from "./Switch";

const Options = () => {
  const [visibleTheme, setVisibleTheme] = useState(false);
  const [visibleLanguage, setVisibleLanguage] = useState(false);

  const languageVisibility = () => {
    setVisibleLanguage(!visibleLanguage);
  };

  const themeVisibility = () => {
    setVisibleTheme(!visibleTheme);
  };
  return (
    <div className="options-container">
      <p className="options-title">
        Options
        <IoIosArrowDown className="arrow-icon" />
      </p>
      <div className="options-selector">
        <p className="theme-title" onClick={themeVisibility}>Theme</p>
        {visibleTheme && (
          <div className="theme-container">
            <div className="switch-container"><Switch /></div>
          </div>
        )}
        <p className="language-title" onClick={languageVisibility}>Language</p>
        {visibleLanguage && (
          <div className="language-container">
            <p className="pt-container">Portuguese</p>
						<p className="en-container">English</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
