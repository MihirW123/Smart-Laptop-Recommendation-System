import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? <FaSun color="#FFD700"/> : <FaMoon color=    "#2563EB" />}
    </button>
  );
}

export default ThemeToggle;