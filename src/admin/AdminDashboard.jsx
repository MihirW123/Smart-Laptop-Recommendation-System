import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import AdminSidebar from "./AdminSidebar";

import {
  FaUsers,
  FaLaptop,
  FaStar,
  FaBullseye,
  FaChartLine,
  FaBell,
  FaUserPlus,
  FaPlus,
  FaComments,
  FaTags,
  FaGamepad,
  FaCode,
  FaGraduationCap,
  FaEdit
} from "react-icons/fa";

import {
  FaMicrochip,
  FaMemory,
  FaDatabase
} from "react-icons/fa";

import "./AdminDashboard.css";

function AdminDashboard() {
  const { darkMode } = useTheme();

  /* ============================
     Animated Background Icons
  ============================ */

  const iconComponents = [
    FaLaptop,
    FaMicrochip,
    FaMemory,
    FaDatabase,
    FaChartLine,
    FaUsers,
    FaBullseye
  ];

  const backgroundIcons = useMemo(() => {
    return Array.from({ length: 25 }, (_, index) => {
      const Icon =
        iconComponents[
          Math.floor(Math.random() * iconComponents.length)
        ];

      return {
        id: index,
        Icon,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 25 + Math.random() * 40,
        duration: 18 + Math.random() * 15,
        delay: Math.random() * 20,
        opacity: 0.04 + Math.random() * 0.07
      };
    });
  }, []);

  return (
    <div
      className={`admin-container ${
        darkMode ? "dark" : "light"
      }`}
    >

      {/* ============================
          Animated Background
      ============================ */}

      <div className="admin-background-icons">
        {backgroundIcons.map((item) => {
          const { Icon } = item;

          return (
            <Icon
              key={item.id}
              className="admin-bg-icon"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                fontSize: `${item.size}px`,
                opacity: item.opacity,
                animationDuration: `${item.duration}s`,
                animationDelay: `-${item.delay}s`
              }}
            />
          );
        })}
      </div>


      {/* ============================
          Sidebar
      ============================ */}

      <AdminSidebar />


      {/* ============================
          Main Area
      ============================ */}

      <main className="admin-main">

        {/* Top Bar */}

        <header className="admin-topbar">

          <div className="admin-title">
            <h1>Admin Dashboard</h1>
            <p>
              Monitor and manage your laptop recommendation platform.
            </p>
          </div>

          <div className="admin-top-actions">

            <button className="notification-btn">
              <FaBell />
              <span className="notification-dot"></span>
            </button>

            <div className="admin-profile">
              <div className="admin-profile-icon">
                <FaUsers />
              </div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>

          </div>

        </header>


        {/* Theme Toggle */}

        <ThemeToggle />


        {/* ============================
            Welcome Section
        ============================ */}

        <section className="admin-welcome">

          <div>
            <h2>Good Morning, Admin 👋</h2>

            <p>
              Here's an overview of what's happening
              on your platform.
            </p>
          </div>

          <div className="admin-date">
            Dashboard Overview
          </div>

        </section>


        {/* ============================
            Statistics Cards
        ============================ */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon users">
              <FaUsers />
            </div>

            <div className="stat-info">
              <span>Total Users</span>
              <h3>—</h3>
              <small>
                User data will appear here
              </small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon laptops">
              <FaLaptop />
            </div>

            <div className="stat-info">
              <span>Total Laptops</span>
              <h3>—</h3>
              <small>
                Laptop inventory
              </small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon recommendations">
              <FaBullseye />
            </div>

            <div className="stat-info">
              <span>Recommendations</span>
              <h3>—</h3>
              <small>
                Recommendations generated
              </small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon reviews">
              <FaStar />
            </div>

            <div className="stat-info">
              <span>Reviews</span>
              <h3>—</h3>
              <small>
                Total reviews
              </small>
            </div>

          </div>

        </section>


        {/* ============================
            Main Analytics Section
        ============================ */}

        <section className="admin-content-grid">


          {/* Recommendation Chart */}

          <div className="admin-panel recommendation-panel">

            <div className="panel-header">

              <div>
                <h3>Recommendations</h3>
                <p>
                  Recommendation activity
                </p>
              </div>

              <FaChartLine />

            </div>

            <div className="chart-placeholder">

              <div className="chart-lines">

                <div className="chart-line line-one"></div>
                <div className="chart-line line-two"></div>
                <div className="chart-line line-three"></div>
                <div className="chart-line line-four"></div>

              </div>

              <FaChartLine className="big-chart-icon" />

              <p>
                Analytics will appear here
              </p>

            </div>

          </div>


          {/* Popular Brands */}

          <div className="admin-panel">

            <div className="panel-header">

              <div>
                <h3>Popular Brands</h3>
                <p>
                  Most preferred brands
                </p>
              </div>

              <FaTags />

            </div>


            <div className="brand-list">

              <div className="brand-row">
                <span>Lenovo</span>
                <div className="brand-progress">
                  <div style={{ width: "70%" }}></div>
                </div>
                <strong>—</strong>
              </div>

              <div className="brand-row">
                <span>HP</span>
                <div className="brand-progress">
                  <div style={{ width: "55%" }}></div>
                </div>
                <strong>—</strong>
              </div>

              <div className="brand-row">
                <span>Dell</span>
                <div className="brand-progress">
                  <div style={{ width: "45%" }}></div>
                </div>
                <strong>—</strong>
              </div>

              <div className="brand-row">
                <span>ASUS</span>
                <div className="brand-progress">
                  <div style={{ width: "35%" }}></div>
                </div>
                <strong>—</strong>
              </div>

            </div>

          </div>

        </section>


        {/* ============================
            User Preferences
        ============================ */}

        <section className="admin-content-grid bottom-grid">


          <div className="admin-panel">

            <div className="panel-header">

              <div>
                <h3>User Preferences</h3>
                <p>
                  What users are looking for
                </p>
              </div>

              <FaBullseye />

            </div>


            <div className="preference-list">

              <div className="preference-row">

                <div className="preference-name">
                  <FaGamepad />
                  <span>Gaming</span>
                </div>

                <div className="preference-bar">
                  <div style={{ width: "80%" }}></div>
                </div>

              </div>


              <div className="preference-row">

                <div className="preference-name">
                  <FaCode />
                  <span>Programming</span>
                </div>

                <div className="preference-bar">
                  <div style={{ width: "65%" }}></div>
                </div>

              </div>


              <div className="preference-row">

                <div className="preference-name">
                  <FaGraduationCap />
                  <span>Student</span>
                </div>

                <div className="preference-bar">
                  <div style={{ width: "55%" }}></div>
                </div>

              </div>


              <div className="preference-row">

                <div className="preference-name">
                  <FaEdit />
                  <span>Editing</span>
                </div>

                <div className="preference-bar">
                  <div style={{ width: "40%" }}></div>
                </div>

              </div>

            </div>

          </div>


          {/* Attention Panel */}

          <div className="admin-panel attention-panel">

            <div className="panel-header">

              <div>
                <h3>Attention Required</h3>
                <p>
                  Things that may need action
                </p>
              </div>

              <FaBell />

            </div>


            <div className="attention-list">

              <div className="attention-item">

                <div className="attention-icon">
                  <FaComments />
                </div>

                <div>
                  <strong>Reviews</strong>
                  <span>
                    Pending reviews
                  </span>
                </div>

              </div>


              <div className="attention-item">

                <div className="attention-icon">
                  <FaLaptop />
                </div>

                <div>
                  <strong>Laptops</strong>
                  <span>
                    Inventory updates
                  </span>
                </div>

              </div>


              <div className="attention-item">

                <div className="attention-icon">
                  <FaUsers />
                </div>

                <div>
                  <strong>Users</strong>
                  <span>
                    User activity
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================
            Recent Activity
        ============================ */}

        <section className="admin-panel activity-panel">

          <div className="panel-header">

            <div>
              <h3>Recent Activity</h3>
              <p>
                Latest activity on the platform
              </p>
            </div>

            <FaChartLine />

          </div>


          <div className="activity-list">

            <div className="activity-item">

              <div className="activity-icon">
                <FaUserPlus />
              </div>

              <div className="activity-info">
                <strong>New user registered</strong>
                <span>User activity will appear here</span>
              </div>

              <span className="activity-time">
                —
              </span>

            </div>


            <div className="activity-item">

              <div className="activity-icon">
                <FaPlus />
              </div>

              <div className="activity-info">
                <strong>New laptop added</strong>
                <span>Laptop management activity</span>
              </div>

              <span className="activity-time">
                —
              </span>

            </div>


            <div className="activity-item">

              <div className="activity-icon">
                <FaStar />
              </div>

              <div className="activity-info">
                <strong>New review</strong>
                <span>Review activity will appear here</span>
              </div>

              <span className="activity-time">
                —
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;