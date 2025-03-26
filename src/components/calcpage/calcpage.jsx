import React from "react";
import "./calcpage.css";

function CalcPage({ darkMode }) {
    return <h1 style={{ color: darkMode ? "white" : "black" }}>Calculator Page</h1>;
  }
  
export default CalcPage;