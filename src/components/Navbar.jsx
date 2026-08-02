import {
  FaUserCircle,
  FaHome,
  FaLaptop,
  FaInfoCircle,
  FaEnvelope
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/logo.jpeg";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

function Navbar({ openSidebar }) {
  const { darkMode } = useTheme();

  return (
    <>
      <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <ThemeToggle />

        <img
          src={logo}
          alt="Logo"
          className="logo"
        />

        <ul className="nav-links">
          <li>
            <a href="#">
              <FaHome className="nav-icon" />
              Home
            </a>
          </li>

          <li onClick={openSidebar} className="guide-link">
            <a href="#">
              <FaLaptop className="nav-icon" />
              Laptop Guide
            </a>
          </li>

          <li>
            <a href="#">
              <FaInfoCircle className="nav-icon" />
              About Us
            </a>
          </li>

          <li>
            <a href="#">
              <FaEnvelope className="nav-icon" />
              Contact
            </a>
          </li>
        </ul>

        <div className="profile">
          <FaUserCircle size={34} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;