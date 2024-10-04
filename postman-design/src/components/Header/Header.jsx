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
import { TiTick } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

function Header() {
  const [isWorkspace, setIsWorkspace] = useState(false);
  const [isApinetwork, setIsApinetwork] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleWsdropdown = () => setIsWorkspace(!isWorkspace);
  const toggleApidropdown = () => setIsApinetwork(!isApinetwork);

  const toggleActiveinput = () => {
    setIsActive(!setIsActive);
  };
  const workspaceRef = useRef(null);
  const apinetworkRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        workspaceRef.current &&
        !workspaceRef.current.contains(event.target)
      ) {
        setIsWorkspace(false);
        setIsActive(false);
      }

      if (
        apinetworkRef.current &&
        !apinetworkRef.current.contains(event.target)
      ) {
        setIsApinetwork(false);
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
            <div className="workspaces-text" onClick={toggleWsdropdown}>
              WorkSpaces
              {isWorkspace ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isWorkspace && (
              <div className="workspaces-dropdownlist" ref={workspaceRef}>
                <div className="ws-dd-header">
                  <div className="ws-dd-header-inp">
                    <input
                      type="text"
                      className={`ws-dd-inp ${isActive ? "" : "active"}`}
                      placeholder="Search workplaces"
                      onClick={toggleActiveinput}
                    />
                  </div>
                  <div className="create-ws-button">
                    <button className="create-ws-button-ins">
                      Create Workspace
                    </button>
                  </div>
                </div>
                <div className="ws-dd-middle">
                  <div className="middle-head">
                    <strong>Recently visited</strong>
                  </div>
                  <div className="middle-mid">
                    <TiTick />
                    <FaRegUser />
                    My Workspace
                  </div>
                  <div className="middle-mid-sec">
                    <strong>More workspaces</strong>
                  </div>
                  <div className="middle-mid-third">No workspaces found</div>
                </div>
                <div className="ws-dd-footer">
                  <div className="ws-dd-footer-content">
                    View all workspaces
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            )}
            <div className="apinetwork-test" onClick={toggleApidropdown}>
              API Network
              {isApinetwork ? <FaAngleUp /> : <FaAngleDown />}
            </div>
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
