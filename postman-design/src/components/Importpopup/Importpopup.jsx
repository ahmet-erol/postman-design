import React, { useState, useRef, useEffect } from "react";
import "./Importpopup.css";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";

function Importpopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const toggleDropdown = () => setIsOpen(!isOpen);
  const footerdropdownRef = useRef(null);
  const importRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (importRef.current && !importRef.current.contains(event.target)) {
        onClose();
      }
      if (
        footerdropdownRef.current &&
        !footerdropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="import-main" ref={importRef}>
      <div className="top-import">
        <input
          type="text"
          placeholder="Paste cURL, Raw text or URL..."
          className={`import-top-text ${isOpen ? "active" : ""}`}
          onClick={handleInputClick}
        />
      </div>
      <div className="topbottom-import">
        <div className="topbottom-context">
          <MdOutlineTipsAndUpdates size={18} />
          Tip: You can also paste cURL in the request bar to import
        </div>
      </div>
      <div className="middle-import">
        <div className="middle-context">
          <CiImport size={50} />
          Drop anywhere to import or select files or folders
        </div>
      </div>
      <div className="footer-import">
        <div className="footer-left" ref={footerdropdownRef}>
          <div className="footer-left-dropdownheader" onClick={toggleDropdown}>
            <BsFillWrenchAdjustableCircleFill size={18} />
            Migrate to Postman
            <FaAngleDown />
          </div>
          {isOpen && (
            <div className="footer-dropdown-list">
              <div className="footer-dropdown-header">From</div>
              <div
                className="footer-item"
                onClick={() => handleOptionClick("SoapUI")}
              >
                SoapUI
              </div>
              <div
                className="footer-item"
                onClick={() => handleOptionClick("Other")}
              >
                Other
              </div>
              <div className="footer-dropdown-footer">
                Learn about <br /> migrating data to Postman
              </div>
            </div>
          )}
        </div>
        <div className="footer-mid">
          <FaGithub size={15} />
          <FaBitbucket size={15} color="#357DE8" />
          <FaGitlab size={15} color="#E64122" />
          Other Sources
          <FaAngleDown />
        </div>
        <div className="footer-right">Learn more about importing data</div>
      </div>
    </div>
  );
}

export default Importpopup;
