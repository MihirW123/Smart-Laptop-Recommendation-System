import { useState, useMemo } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

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

function RegisterPage() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // NEW: Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { darkMode, toggleTheme } = useTheme();


  // ===========================
  // Register
  // ===========================

  const handleRegister = (e) => {

    e.preventDefault();

    // Basic validation

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 8 || password.length > 12) {
      alert("Password must be between 8 and 12 characters.");
      return;
    }


    /*
      TEMPORARY OTP FLOW

      Later we will call Spring Boot here
      to actually send the OTP to the email.
    */

    console.log("Registration email:", email);

    // Go to OTP verification page
    navigate("/verify-otp", {
      state: {
        email: email
      }
    });
  };


  // ===========================
  // Background Icons
  // ===========================

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


  const backgroundIcons = useMemo(() => {

    return Array.from({ length: 30 }, (_, index) => {

      const Icon =
        iconComponents[
          Math.floor(
            Math.random() *
            iconComponents.length
          )
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
      <CustomCursor />

      <div
        className={`container ${
          darkMode ? "dark" : "light"
        }`}
      >

        {/* ===========================
            Theme Toggle
        =========================== */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>


        {/* ===========================
            Animated Background
        =========================== */}

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
                  animationDuration:
                    `${item.duration}s`,
                  animationDelay:
                    `-${item.delay}s`,
                  transform:
                    `rotate(${item.rotation}deg)`
                }}
              />

            );

          })}

        </div>


        {/* ===========================
            Register Card
        =========================== */}

        <div className="login-box">

          {/* Logo */}

          <img
            src={logo}
            alt="Logo"
            className="logo"
          />


          <h2>
            Create Account
          </h2>


          <p className="subtitle">
            Join us and start your journey today
          </p>


          {/* ===========================
              Name
          =========================== */}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />


          {/* ===========================
              Email
          =========================== */}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />


          {/* ===========================
              Password
          =========================== */}

          <div className="password-container">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password (8-12 Characters)"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }

            </span>

          </div>


          {/* ===========================
              Confirm Password
          =========================== */}

          <div className="password-container">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >

              {showConfirmPassword
                ? <FaEyeSlash />
                : <FaEye />
              }

            </span>

          </div>


          {/* ===========================
              Create Account
          =========================== */}

          <button
            className="login-btn"
            onClick={handleRegister}
          >
            Create Account
          </button>


          {/* ===========================
              Login
          =========================== */}

          <p className="register-text">

            Already have an account?{" "}

            <Link to="/">
              Login
            </Link>

          </p>

        </div>

      </div>
    </>
  );
}

export default RegisterPage;