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
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Invitepopup from "../Invitepopup/Invitepopup";

function Header() {
  const [isWorkspace, setIsWorkspace] = useState(false);
  const [isApinetwork, setIsApinetwork] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [newInvite, setNewInvite] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleWsdropdown = () => setIsWorkspace(!isWorkspace);
  const toggleApidropdown = () => setIsApinetwork(!isApinetwork);

  const handleInviteClick = () => {
    setNewInvite(true);
  };

  const handleCloseInvite = () => {
    setNewInvite(false);
  };

  const toggleActiveinput = () => {
    setIsActive(!setIsActive);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
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
                    <div className="wss-dd-icon">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="apinetwork-test" onClick={toggleApidropdown}>
              API Network
              {isApinetwork ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isApinetwork && (
              <div className="apinetwork-dropdownlist" ref={apinetworkRef}>
                <div className="api-dw-top">
                  <div className="dw-top-header">
                    {" "}
                    Explore and integrate with public APIs
                  </div>

                  <div className="dw-top-mid">
                    <div className="dw-top-mid-first">
                      <TfiAnnouncement size={15} />
                      API Spotlight
                    </div>
                    <div className="dw-top-mid-second">
                      <MdOutlineTrendingUp size={15} />
                      Trending APIs
                    </div>
                  </div>
                  <div className="dw-top-bottom">
                    View all public APIs
                    <div className="right-arrowr-dw">
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                </div>

                <div className="api-dw-bottom">
                  <div className="dw-bottom-header">
                    Use internal team APIs to ease development
                  </div>

                  <div className="dw-bottom-mid">
                    A central hub for internal APIs, to streamline your
                    development.
                  </div>

                  <div className="dw-bottom-bottom">
                    View internal APIs
                    <div className="right-arrowr-dw">
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="center-area">
        <input type="text" className="search-box" placeholder="Search It" />
      </div>

      <div className="right-area">
        <button
          type="button"
          className="invite-button"
          onClick={handleInviteClick}
        >
          <IoPersonAddOutline className="invite-logo" />
          Invite
        </button>

        <IoSettingsOutline
          className="options-logo"
          onClick={handleSettingsClick}
        />
        {isSettingsOpen && (
          <div className="settings-menu">
            <div className="settings-one">Settings</div>
            <div className="settings-release">Release Notes</div>
            <div className="settings-learning">Learning Center</div>
            <div className="settings-support">Support Center</div>
            <div className="settings-trust">Trust and Security</div>
            <div className="settings-privacy">Privacy Policy</div>
            <div className="settings-terms">Terms</div>
            <div className="settings-getpostman">@getpostman</div>
          </div>
        )}
        <IoMdNotificationsOutline className="noti-logo" />

        <button type="button" className="upgrade-button">
          Upgrade
        </button>
        {newInvite && <Invitepopup onClose={handleCloseInvite} />}
      </div>
    </div>
  );
}

export default Header;
