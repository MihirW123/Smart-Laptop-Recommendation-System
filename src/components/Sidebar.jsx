import "./Sidebar.css";
import { useTheme } from "../context/ThemeContext";
import {
  FaTimes,
  FaMicrochip,
  FaDesktop,
  FaMemory,
  FaHdd,
  FaBatteryHalf,
} from "react-icons/fa";

function Sidebar({
  isOpen,
  closeSidebar,
  selectedTopic,
  setSelectedTopic,
}) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""} ${
        darkMode ? "dark" : "light"
      }`}
    >
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>

      <h2>Laptop Guide</h2>

      <ul>
        <li
          className={selectedTopic === "cpu" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("cpu")}
        >
          <FaMicrochip /> CPU
        </li>

        <li
          className={selectedTopic === "gpu" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("gpu")}
        >
          <FaDesktop /> GPU
        </li>

        <li
          className={selectedTopic === "ram" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("ram")}
        >
          <FaMemory /> RAM
        </li>

        <li
          className={selectedTopic === "storage" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("storage")}
        >
          <FaHdd /> Storage
        </li>

        <li
          className={selectedTopic === "display" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("display")}
        >
          🖥 Display
        </li>

        <li
          className={selectedTopic === "battery" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("battery")}
        >
          <FaBatteryHalf /> Battery
        </li>

        <li
          className={selectedTopic === "ports" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("ports")}
        >
          🌐 Ports
        </li>

        <li
          className={selectedTopic === "keyboard" ? "active" : ""}
          onMouseEnter={() => setSelectedTopic("keyboard")}
        >
          ⌨ Keyboard
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;