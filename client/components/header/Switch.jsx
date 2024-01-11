import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useState } from "react";

import "./Switch.css";

const Switch = () => {
  const [switchChecked, setSwitchChecked] = useState(true);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setSwitchChecked(!switchChecked);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setSwitchChecked(!switchChecked);
  };

  const toggleTheme = () => {
    if (switchChecked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="switch">
      <input
        className="switch_input"
        type="checkbox"
        id="toggle"
        checked={!switchChecked}
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
