import React, { useEffect, useState } from "react";
import "../styles/darkModeToggle.css";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const saveTheme = localStorage.getItem("darkMode");
    if (saveTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div>
      <button
        className={`toggle-btn ${darkMode ? "dark" : "light"}`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <p>Toggle to Change theme</p>
    </div>
  );
};

export default DarkModeToggle;
