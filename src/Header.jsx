import React from "react";
import "./Header.css";

const Header = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left">
          <h1>ReactMeals</h1>
        </div>

        <div className="header-right">
          <button onClick={handleButtonClick} className="header-button">
            Click Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
