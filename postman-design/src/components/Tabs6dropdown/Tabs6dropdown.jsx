import React, { useEffect } from "react";
import "./Tabs6dropdown.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useRef } from "react";

function Tabs6dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("HTTP/1.x");
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div
        className={`dropdown-header ${isOpen ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <span className="arrow">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <div
            className="dropdown-item"
            onClick={() => handleOptionClick("Auto")}
          >
            Auto
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleOptionClick("HTTP/1.x")}
          >
            HTTP/1.x
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleOptionClick("HTTP/2")}
          >
            HTTP/2
          </div>
        </div>
      )}
    </div>
  );
}

export default Tabs6dropdown;
