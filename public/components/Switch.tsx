import React, { useState, useEffect } from "react";
import "./BackgroundToggle.css";

const backgrounds = {
  light: "/images/wallp1.png",
  dark: "/images/wallp2.png",
};

const BackgroundToggle: React.FC = () => {
  const [isDarkBackground, setIsDarkBackground] = useState<boolean>(
    localStorage.getItem("background") === "dark"
  );

  // Effect to update background and store preference
  useEffect(() => {
    document.body.style.backgroundImage = `url(${
      isDarkBackground ? backgrounds.dark : backgrounds.light
    })`;
    localStorage.setItem("background", isDarkBackground ? "dark" : "light");
  }, [isDarkBackground]);

  return (
    <button
      className="background-toggle"
      onClick={() => setIsDarkBackground(!isDarkBackground)}
    >
      {isDarkBackground ? "🟢" : "🔵 "}
    </button>
  );
};

export default BackgroundToggle;
