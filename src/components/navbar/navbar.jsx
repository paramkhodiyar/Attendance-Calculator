import "./navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="nav-container">
        <h1 className="logo">AttendCalc 🎯</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Calculator</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
        <div className={`container ${darkMode ? "dark-mode" : ""}`}>
          <label className={`toggle5 ${darkMode ? "dark-mode" : ""}`}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
