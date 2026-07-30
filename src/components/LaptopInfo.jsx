import "./LaptopInfo.css";
import { useTheme } from "../context/ThemeContext";

function LaptopInfo({ item }) {
  const { darkMode } = useTheme();

  if (!item) return null;

  return (
    <div className={`info-panel ${darkMode ? "dark" : "light"}`}>
      <h1>{item.title}</h1>

      <p>{item.description}</p>

      <h3>Why is it Important?</h3>
      <p>{item.importance}</p>

      <h3>Best For</h3>
      <ul>
        {item.bestFor.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <h3>Popular Examples</h3>
      <ul>
        {item.examples.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default LaptopInfo;