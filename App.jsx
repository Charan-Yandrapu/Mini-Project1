import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import "./styles/darkmode.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme =
      localStorage.getItem("darkMode");

    return savedTheme
      ? JSON.parse(savedTheme)
      : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>
        <Navbar />

        <div className="main-content">
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/reports"
              element={<Reports />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;