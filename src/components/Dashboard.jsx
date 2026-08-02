import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CustomCursor from "./CustomCursor";

import {
  FaLaptop,
  FaKeyboard,
  FaMemory,
  FaBatteryFull,
  FaWifi,
  FaMicrochip,
  FaMouse,
  FaDesktop,
  FaUsb,
} from "react-icons/fa";

import "./Dashboard.css";
import { laptopGuide } from "../data/laptopGuideData";
import LaptopInfo from "./LaptopInfo";

function Dashboard() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
const [selectedTopic, setSelectedTopic] = useState(null);
const toggleSidebar = () => {
  if (isSidebarOpen) {
    setSidebarOpen(false);
    setSelectedTopic(null);
  } else {
    setSidebarOpen(true);
  }
};

  const iconComponents = [
    FaLaptop,
    FaKeyboard,
    FaMemory,
    FaBatteryFull,
    FaWifi,
    FaMicrochip,
    FaMouse,
    FaDesktop,
    FaUsb,
  ];

  const backgroundIcons = useMemo(() => {
    return Array.from({ length: 30 }, (_, index) => {
      const Icon =
        iconComponents[Math.floor(Math.random() * iconComponents.length)];

      return {
        id: index,
        Icon,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 25 + Math.random() * 40,
        duration: 18 + Math.random() * 15,
        delay: Math.random() * 20,
        opacity: 0.05 + Math.random() * 0.08,
        rotation: Math.random() * 360,
      };
    });
  }, []);

  return (
    <>
<Sidebar
  isOpen={isSidebarOpen}
  closeSidebar={() => {
    setSidebarOpen(false);
    setSelectedTopic(null);
  }}
  selectedTopic={selectedTopic}
  setSelectedTopic={setSelectedTopic}
/>
{isSidebarOpen && selectedTopic && (
  <LaptopInfo item={laptopGuide[selectedTopic]} />
)}
      <CustomCursor />

      <div className={`container ${darkMode ? "dark" : "light"}`}>
        <ThemeToggle />

        <div className="background-icons">
          {backgroundIcons.map((item) => {
            const { Icon } = item;

            return (
              <Icon
                key={item.id}
                className="bg-icon"
                style={{
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                  fontSize: `${item.size}px`,
                  opacity: item.opacity,
                  animationDuration: `${item.duration}s`,
                  animationDelay: `-${item.delay}s`,
                  transform: `rotate(${item.rotation}deg)`,
                }}
              />
            );
          })}
        </div>

    <Navbar openSidebar={toggleSidebar} />

        <div className="dashboard-content">
          <h1>Find Your Perfect Laptop</h1>

          <p>
            Get personalized laptop recommendations based on your needs,
            budget, and preferences.
          </p>

          <button
            className="start-btn"
            onClick={() => navigate("/questionnaire")}
          >
            Start Questionnaire
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;