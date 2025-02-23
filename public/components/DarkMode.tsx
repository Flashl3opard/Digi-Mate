import { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={() => setIsDarkMode((prev) => !prev)}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src="/images/sun.svg" alt="Light Mode" />
        <img src="/images/moon.svg" alt="Dark Mode" />
      </label>
    </div>
  );
};

export default DarkMode;
