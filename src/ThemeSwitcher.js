import { useState } from "react";
import { useDarkMode } from "usehooks-ts";
import { Icon } from "@iconify/react";

function ThemeSwitcher() {
  const lightModeBtn = (
    <Icon className="icon" icon="gg:sun" width="30" height="30" />
  );
  const darkModeBtn = (
    <Icon className="icon" icon="gg:moon" width="30" height="30" />
  );

  const { isDarkMode, toggle } = useDarkMode();
  const [toggleBtn, setToggleBtn] = useState(
    isDarkMode ? darkModeBtn : lightModeBtn
  );

  const toggleThemes = () => {
    toggle();
    setToggleBtn(isDarkMode ? lightModeBtn : darkModeBtn);
  };

  return (
    <div>
      {isDarkMode
        ? document.documentElement.setAttribute("data-theme", "dark")
        : document.documentElement.removeAttribute("data-theme", "light")}
      <button className="themeButton" onClick={toggleThemes}>
        {toggleBtn} {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
