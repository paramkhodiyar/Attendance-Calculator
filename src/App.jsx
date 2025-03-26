import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import CalcPage from "./components/calcpage/calcpage";
import Settings from "./components/settings/settings";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/calculator" element={<CalcPage darkMode={darkMode} />} />
        <Route path="/settings" element={<Settings darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
