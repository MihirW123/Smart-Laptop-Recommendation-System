import { FaUserCircle } from "react-icons/fa";
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
          <li><a href="#">Home</a></li>

          {/* Opens the sidebar */}
          <li onClick={openSidebar} className="guide-link">
            <a href="#"> Laptop Guide</a>
          </li>

          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="profile">
          <FaUserCircle size={34} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;