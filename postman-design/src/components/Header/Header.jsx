import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { IoOptions } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Header() {
  const [isWorkspace, setIsWorkspace] = useState(false);
  const toggleWsdropdown = () => setIsWorkspace(!isWorkspace);
  const workspaceRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        workspaceRef.current &&
        !workspaceRef.current.contains(event.target)
      ) {
        setIsWorkspace(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-div">
      <div className="left-area">
        <div className="logo-options">
          <IoOptions />
        </div>
        <div className="collection">
          <div className="arrow">
            <FaArrowLeft className="left-arrow" />
            <FaArrowRight className="right-arrow" />
          </div>

          <div className="header-texts">
            <div className="home-text">Home</div>
            <div
              className="workspaces-text"
              onClick={toggleWsdropdown}
              ref={workspaceRef}
            >
              WorkSpaces
              {isWorkspace ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isWorkspace && (
              <div className="workspaces-dropdownlist">
                <div className="ws-dd-header">selamlar</div>
              </div>
            )}
            <div className="apinetwork-test">API Network</div>
          </div>
        </div>
      </div>

      <div className="center-area">
        <input type="text" className="search-box" placeholder="Search It" />
      </div>

      <div className="right-area">
        <button type="button" className="invite-button">
          <IoPersonAddOutline className="invite-logo" />
          Invite
        </button>

        <IoSettingsOutline className="options-logo" />
        <IoMdNotificationsOutline className="noti-logo" />

        <button type="button" className="upgrade-button">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default Header;
