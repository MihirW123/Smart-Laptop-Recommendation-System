import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

import {
  FaTachometerAlt,
  FaLaptop,
  FaUsers,
  FaTags,
  FaStar,
  FaQuestionCircle,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "./AdminSidebar.css";

function AdminSidebar() {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      name: "Overview",
      icon: <FaTachometerAlt />,
      path: "/admin"
    },
    {
      name: "Laptops",
      icon: <FaLaptop />,
      path: "/admin/laptops"
    },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/admin/users"
    },
    {
      name: "Brands",
      icon: <FaTags />,
      path: "/admin/brands"
    },
    {
      name: "Reviews",
      icon: <FaStar />,
      path: "/admin/reviews"
    },
    {
      name: "Questions",
      icon: <FaQuestionCircle />,
      path: "/admin/questions"
    },
    {
      name: "Analytics",
      icon: <FaChartBar />,
      path: "/admin/analytics"
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    console.log("Admin logout");
  };

  return (
    <>

      {/* Mobile Toggle */}
      <button
        className="admin-sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>


      {/* Sidebar */}
      <aside
        className={`admin-sidebar ${isOpen ? "open" : ""}`}
      >

        {/* ===========================
            Sidebar Header
        =========================== */}

        <div className="admin-sidebar-header">

          <img
            src={logo}
            alt="Mavix Logo"
            className="admin-logo-image"
          />

          <div className="admin-logo-text">

            <strong>Mavix</strong>

            <span>
              ADMIN PANEL
            </span>

          </div>

        </div>


        {/* ===========================
            Menu
        =========================== */}

        <nav className="admin-menu">

          <p className="menu-title">
            MAIN MENU
          </p>

          {menuItems.map((item) => (

            <button
              key={item.name}
              className="admin-menu-item"
              onClick={() =>
                handleNavigation(item.path)
              }
            >

              <span className="menu-icon">
                {item.icon}
              </span>

              <span className="menu-text">
                {item.name}
              </span>

            </button>

          ))}

        </nav>


        {/* ===========================
            Bottom
        =========================== */}

        <div className="admin-sidebar-bottom">

          <button
            className="admin-menu-item logout"
            onClick={handleLogout}
          >

            <span className="menu-icon">
              <FaSignOutAlt />
            </span>

            <span className="menu-text">
              Logout
            </span>

          </button>

        </div>

      </aside>

    </>
  );
}

export default AdminSidebar;