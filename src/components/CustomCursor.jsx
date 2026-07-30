import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) return;

    // Move cursor
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      ring.style.left = `${clientX}px`;
      ring.style.top = `${clientY}px`;
    };

    // Hover effect
    const handleMouseEnter = () => {
      ring.classList.add("hover");
    };

    const handleMouseLeave = () => {
      ring.classList.remove("hover");
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "button, input, a, select, textarea, label"
    );

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}

export default CustomCursor;