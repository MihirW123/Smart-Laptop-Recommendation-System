import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import {
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

import "./OTPVerification.css";

function OTPVerification() {

    const { darkMode } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    // Email passed from RegisterPage
    const email = location.state?.email || "your email";

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const inputRefs = useRef([]);

    /* =========================
       Background Icons
    ========================= */

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

    const [backgroundIcons] = useState(() => {
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
    });

    /* =========================
       OTP Timer
    ========================= */

    useEffect(() => {

        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [timer]);


    /* =========================
       Handle OTP Input
    ========================= */

    const handleChange = (value, index) => {

        // Only allow numbers
        if (!/^\d*$/.test(value)) {
            return;
        }

        const newOtp = [...otp];

        newOtp[index] = value.slice(-1);

        setOtp(newOtp);

        setError("");
        setMessage("");

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };


    /* =========================
       Backspace
    ========================= */

    const handleKeyDown = (e, index) => {

        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };


    /* =========================
       Paste OTP
    ========================= */

    const handlePaste = (e) => {

        e.preventDefault();

        const pastedData =
            e.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, 6);

        if (!pastedData) return;

        const newOtp = [...otp];

        pastedData.split("").forEach((digit, index) => {
            newOtp[index] = digit;
        });

        setOtp(newOtp);

        const nextIndex =
            Math.min(pastedData.length, 5);

        inputRefs.current[nextIndex]?.focus();
    };


    /* =========================
       Verify OTP
    ========================= */

    const handleVerify = () => {

        const enteredOtp = otp.join("");

        if (enteredOtp.length !== 6) {

            setError("Please enter the complete 6-digit OTP.");

            return;
        }

        /*
         * TEMPORARY FRONTEND TEST
         *
         * Later this will be replaced by:
         *
         * fetch("http://localhost:8080/auth/verify-otp", ...)
         *
         * and Spring Boot will verify the OTP.
         */

        console.log("OTP entered:", enteredOtp);

        // Temporary success
        setMessage("OTP verified successfully!");

        setTimeout(() => {
            navigate("/");
        }, 1200);
    };


    /* =========================
       Resend OTP
    ========================= */

    const handleResend = () => {

        if (timer > 0) return;

        setTimer(60);

        setOtp(["", "", "", "", "", ""]);

        setError("");

        setMessage("A new OTP has been sent.");

        inputRefs.current[0]?.focus();

        /*
         * Later:
         *
         * fetch("http://localhost:8080/auth/send-otp", ...)
         */
    };


    return (

        <div
            className={`otp-container ${
                darkMode ? "dark" : "light"
            }`}
        >

            {/* Theme Toggle */}

            <ThemeToggle />


            {/* =========================
                Animated Background
            ========================= */}

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


            {/* =========================
                OTP Card
            ========================= */}

            <div className="otp-card">

                {/* Logo */}

                <img
                    src="/src/assets/logo.jpeg"
                    alt="Mavix Logo"
                    className="otp-logo"
                />


                <h2>
                    Verify Your Email
                </h2>


                <p className="otp-subtitle">

                    Enter the 6-digit OTP sent to

                    <br />

                    <strong>
                        {email}
                    </strong>

                </p>


                {/* OTP Inputs */}

                <div
                    className="otp-input-container"
                    onPaste={handlePaste}
                >

                    {otp.map((digit, index) => (

                        <input
                            key={index}
                            ref={(element) =>
                                inputRefs.current[index] =
                                    element
                            }
                            type="text"
                            inputMode="numeric"
                            maxLength="1"
                            value={digit}
                            onChange={(e) =>
                                handleChange(
                                    e.target.value,
                                    index
                                )
                            }
                            onKeyDown={(e) =>
                                handleKeyDown(e, index)
                            }
                            className="otp-input"
                        />

                    ))}

                </div>


                {/* Error */}

                {error && (
                    <p className="otp-error">
                        {error}
                    </p>
                )}


                {/* Success */}

                {message && (
                    <p className="otp-success">
                        {message}
                    </p>
                )}


                {/* Verify Button */}

                <button
                    className="verify-btn"
                    onClick={handleVerify}
                >
                    Verify OTP
                </button>


                {/* Resend */}

                <div className="resend-section">

                    {timer > 0 ? (

                        <p>
                            Resend OTP in{" "}
                            <strong>
                                {timer}s
                            </strong>
                        </p>

                    ) : (

                        <button
                            className="resend-btn"
                            onClick={handleResend}
                        >
                            Resend OTP
                        </button>

                    )}

                </div>


                {/* Back */}

                <button
                    className="back-login"
                    onClick={() => navigate("/register")}
                >
                    ← Back to Registration
                </button>

            </div>

        </div>
    );
}

export default OTPVerification;