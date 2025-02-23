import { useState, useEffect } from "react";
import "./DarkMode.css"; // Add styles separately

const DarkModeToggle: React.FC = () => {
  // Get initial theme from localStorage or default to light
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  // Effect to update theme in body and localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
