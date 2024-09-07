import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switch-container">
      <div onClick={toggleSwitch} className={`switch ${isOn ? "on" : "off"}`}>
        <span className={`switch-button ${isOn ? "on" : "off"}`}></span>
      </div>
      <span className={`switch-label ${isOn ? "on" : "off"}`}>
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  );
}

export default Switch;
