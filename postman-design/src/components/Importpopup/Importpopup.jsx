import React, { useState, useRef, useEffect, useInsertionEffect } from "react";
import "./Importpopup.css";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { MdOutlineCloudSync } from "react-icons/md";

function Importpopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMidDropActive, setIsMidDropActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMidDropdown = () => setIsMidDropActive(!isMidDropActive);
  const footerdropdownRef = useRef(null);
  const importRef = useRef(null);
  const footermiddropdownRef = useRef(null);
  const midimportRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleInputMidDrop = () => {
    setIsMidDropActive(true);
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
      if (
        footermiddropdownRef.current &&
        !footermiddropdownRef.current.contains(event.target)
      ) {
        setIsMidDropActive(false);
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
        <div
          className={`footer-left ${isOpen ? "active" : ""}`}
          ref={footerdropdownRef}
          onClick={toggleDropdown}
        >
          <div className="footer-left-dropdownheader">
            <BsFillWrenchAdjustableCircleFill size={18} />
            Migrate to Postman
            <span className="left-drop-span">
              {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </span>
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
        <div
          className={`footer-mid-import ${isMidDropActive ? "active" : ""}`}
          onClick={toggleMidDropdown}
          ref={footermiddropdownRef}
        >
          <div className="footer-mid">
            <div className="footer-mid-logos">
              <FaGithub size={15} />
              <FaBitbucket size={15} color="#357DE8" />
              <FaGitlab size={15} color="#E64122" />
            </div>
            <div className="footer-mid-rightside">
              Other Sources
              <span className="mid-drop-span">
                {isMidDropActive ? <FaAngleUp /> : <FaAngleDown />}
              </span>
              {isMidDropActive && (
                <div className="footer-mid-dropdown-list">
                  <div className="footer-mid-dropdown-header">
                    Code Repositories
                  </div>
                  <div
                    className="footer-mid-item"
                    onClick={() => handleOptionClick("Github")}
                  >
                    <FaGithub size={15} />
                    Github
                  </div>
                  <div
                    className="footer-mid-item"
                    onClick={() => handleOptionClick("Bitbucket")}
                  >
                    <FaBitbucket size={15} color="#357DE8" />
                    Bitbucket
                  </div>
                  <div
                    className="footer-mid-item"
                    onClick={() => handleOptionClick("GitLab")}
                  >
                    <FaGitlab size={15} color="#E64122" />
                    GitLab
                  </div>
                  <div
                    className="footer-mid-item-azure"
                    onClick={() => handleOptionClick("Azure")}
                  >
                    <div className="azure-text">Azure</div>
                  </div>
                  <div className="footer-mid-dropdown-secondheader">
                    API Gateways
                  </div>
                  <div
                    className="footer-mid-item"
                    onClick={() => handleOptionClick("AWS API Gateway")}
                  >
                    <FaAws size={15} color="#FF9900" />
                    AWS API Gateway
                  </div>
                  <div
                    className="footer-mid-item"
                    onClick={() => handleOptionClick("Azure API Management")}
                  >
                    <MdOutlineCloudSync size={15} color="#087CD8" />
                    Azure API Management
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-right">Learn more about importing data</div>
      </div>
    </div>
  );
}

export default Importpopup;
