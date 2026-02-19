import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set theme before React renders to prevent flicker
function initializeTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  
  // Apply theme immediately
  document.documentElement.setAttribute("data-theme", theme);
  
  // Add transition class after a small delay to enable smooth transitions
  setTimeout(() => {
    document.documentElement.classList.add("theme-transition-ready");
  }, 100);
}

initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
