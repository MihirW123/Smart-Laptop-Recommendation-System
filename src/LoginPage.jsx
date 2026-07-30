import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import {FaMoon,FaSun} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import CustomCursor from "./components/CustomCursor";


import {
  FaEye,
  FaEyeSlash,
  FaLaptop,
  FaKeyboard,
  FaMemory,
  FaBatteryFull,
  FaWifi,
  FaMicrochip,
  FaMouse,
  FaDesktop,
  FaUsb
} from "react-icons/fa";

import logo from "./assets/logo.jpeg";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();


  // Icons to use in background
  const iconComponents = [
    FaLaptop,
    FaKeyboard,
    FaMemory,
    FaBatteryFull,
    FaWifi,
    FaMicrochip,
    FaMouse,
    FaDesktop,
    FaUsb
  ];

  // Generate icons only once
  const backgroundIcons = useMemo(() => {
    return Array.from({ length: 30 }, (_, index) => {
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
        opacity: 0.05 + Math.random() * 0.08,
        rotation: Math.random() * 360
      };
    });
  }, []);

  
  return (
<>
<CustomCursor/>

    <div className={`container ${darkMode ? "dark" : "light"}`}>
       <ThemeToggle />
    <button
  className="theme-toggle"
  onClick={toggleTheme}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>
      {/* Animated Background */}
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
                transform: `rotate(${item.rotation}deg)`
              }}
            />
          );
        })}
      </div>

      {/* Login Card */}
      <div className="login-box">

        <img
          src={logo}
          alt="Logo"
          className="logo"
        />

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Login to continue to your account
        </p>

        <input
          type="text"
          placeholder="Username"
        />

        <div className="password-container">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password (8-12 Characters)"
          />

          <span
            className={`eye-icon ${showPassword ? "rotate" : ""}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>
<button
  className="login-btn"
  onClick={() => navigate("/Dashboard")}
>
  Login
</button>

        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
     </>
  );
 
}

export default LoginPage;