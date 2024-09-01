import React from "react";
import { useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        onClick={toggleSwitch}
        className={`relative inline-block w-12 h-6 cursor-pointer transition-colors duration-200 ${
          isOn ? "bg-blue-500" : "bg-gray-500"
        } rounded-full`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </div>
      <span
        className={`text-sm font-medium ${
          isOn ? "text-white" : "text-gray-400"
        }`}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  );
}

export default Switch;
