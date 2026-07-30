import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

import acer from "./assets/acer.png";
import apple from "./assets/apple.png";
import Dell from "./assets/Dell.png";
import msi from"./assets/msi.png";
import razor from "./assets/razor.png";

function Questionnaire() {
  const { darkMode } = useTheme();
    const navigate = useNavigate();
  const brands = [
  { name: "Acer", image: acer },
  { name: "Apple", image: apple },
  { name: "Dell", image: Dell },
  { name: "MSI", image: msi },
  {name:"Razor",image:razor}
];

const handleOptionClick = (option) => {

        console.log(option);

        if(step < questions.length - 1){
            setStep(step + 1);
        }
        else{
            navigate("/dashboard");
        }
    };

const handleBrandClick = (brand) => {
  console.log(brand);

  navigate("/dashboard");
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
      <div className={`questionnaire-container ${darkMode ? "dark" : "light"}`}>
         <ThemeToggle />
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
       <div
  className={`question-card ${
    darkMode ? "dark-card" : "light-card"
  }`}
>
  <h2>Which laptop brand do you prefer?</h2>

  <div className="brand-grid">
    {brands.map((brand) => (
      <div
        key={brand.name}
        className="brand-card"
        onClick={() => handleBrandClick(brand.name)}
      >
        <img
          src={brand.image}
          alt={brand.name}
          className="brand-logo"
        />

        <p>{brand.name}</p>
      </div>
    ))}
  </div>
</div>
           
        </div>
    );
}

export default Questionnaire;
