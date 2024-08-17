import React, { useState, useEffect, useRef } from "react";
import "./Rightworkplace.css";
import { IoSaveOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Tabs1 from "../Tabs/Tabs1/Tabs1.jsx";
import Tabs2 from "../Tabs/Tabs2/Tabs2.jsx";
import Tabs3 from "../Tabs/Tabs3/Tabs3.jsx";
import Tabs4 from "../Tabs/Tabs4/Tabs4.jsx";

function Rightworkplace() {
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("GET");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top-main-div">
      <div className="top-title-div">
        <div className="top-left">
          <div className="http-logo">HTTP</div>
          <div className="texts">
            <div className="police-button">Poliçe İşlemleri</div>
            <div className="space-between-buttons">/</div>
            <div className="zeyil-button">Zeyil Sil</div>
          </div>
        </div>

        <div className="top-right">
          <div className="save-btn">
            <button className="save-btn-inside">
              <div className="save-icon">
                <IoSaveOutline />
              </div>
              <div className="save-text">Save</div>
            </button>
            <button className="save-btn-down">
              <div className="save-down-icon">
                <FaAngleDown />
              </div>
            </button>
          </div>

          <div className="share-btn">
            <button className="share-btn-inside">Share</button>
          </div>
        </div>
      </div>
      <div className="top-content">
        <div className="top-bottom-url">
          <div className="custom-dropdown" ref={dropdownRef}>
            <button
              className={`dropdown-button ${selectedOption.toLowerCase()}`}
              onClick={toggleDropdown}
              onChange={handleSelectChange}
            >
              {selectedOption.toUpperCase()}
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                <div className="get" onClick={() => handleOptionClick("get")}>
                  GET
                </div>
                <div className="post" onClick={() => handleOptionClick("post")}>
                  POST
                </div>
                <div className="put" onClick={() => handleOptionClick("put")}>
                  PUT
                </div>
                <div
                  className="patch"
                  onClick={() => handleOptionClick("patch")}
                >
                  PATCH
                </div>
                <div
                  className="delete"
                  onClick={() => handleOptionClick("delete")}
                >
                  DELETE
                </div>
                <div className="head" onClick={() => handleOptionClick("head")}>
                  HEAD
                </div>
                <div
                  className="optionses"
                  onClick={() => handleOptionClick("options")}
                >
                  OPTIONS
                </div>
              </div>
            )}
          </div>

          <input type="text" placeholder="Enter URL or paste text" />

          <div className="top-bottom-right">
            <div className="top-bottom-right-save">
              <button className="top-bottom-right-save-inside">
                <div className="top-bottom-right-save-text">Send</div>
              </button>
              <button className="top-bottom-right-save-down">
                <div className="top-bottom-right-save-down-icon">
                  <FaAngleDown />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mid-top-main-div">
          <div className="mid-top-buttons">
            <button onClick={() => setActiveTab("tab1")}> Params </button>
            <button onClick={() => setActiveTab("tab2")}>
              {" "}
              Authorization{" "}
            </button>
            <button onClick={() => setActiveTab("tab3")}> Headers </button>
            <button onClick={() => setActiveTab("tab4")}> Body </button>
            <button onClick={() => setActiveTab("tab5")}> Scripts </button>
            <button onClick={() => setActiveTab("tab6")}> Settings </button>
          </div>

          <div className="tab-container">
            {activeTab === "tab1" && (
              <div className="tab-content">
                <Tabs1 />
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="tab-content">
                <Tabs2 />
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="tab-content">
                <Tabs3 />
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="tab-content">
                <Tabs4 />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightworkplace;
