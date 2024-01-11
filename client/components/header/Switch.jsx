import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

import "./Switch.css";

const Switch = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="switch">
      <input
        className="switch_input"
        type="checkbox"
        id="toggle"
        onChange={toggleTheme}
      />

      <label className="switch_label" htmlFor="toggle">
        <div className="icons">
          <GoSun className="sun" />
          <IoMoonOutline className="moon" />
        </div>
      </label>
    </div>
  );
};

export default Switch;
