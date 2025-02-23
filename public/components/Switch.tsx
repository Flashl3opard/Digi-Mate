import React, { useState, useEffect } from "react";
import "./BackgroundToggle.css"; // Add styles separately

// Define background images
const backgrounds = {
  light: "/images/wallp1.png",
  dark: "/images/wallp2.png",
};

const BackgroundToggle: React.FC = () => {
  // Get initial background from localStorage or default to "light"
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
      {isDarkBackground ? "🌄 Light Background" : "🌌 Dark Background"}
    </button>
  );
};

export default BackgroundToggle;
