import React from "react";
import "./Leftworkplace.css";
import { FaRegUser } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { RiHistoryFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import Newpopup from "../Newpopup/Newpopup";

function Leftworkplace() {
  const [newPopup, setNewPopup] = useState(false);

  const handleClick = () => {
    setNewPopup(true);
  };

  return (
    <div className="mainleft-div">
      <div className="my-workspace">
        <div className="workspace-left">
          <div className="left-user-logo">
            <FaRegUser className="workspace-logo" />
            <div className="myworkspace-texting">My Workspace</div>
          </div>
        </div>

        <div className="workspace-right">
          <div className="left-newbutton">
            <button
              type="button"
              className="left-newbutton-inside"
              onClick={handleClick}
            >
              New
            </button>
            {newPopup && <Newpopup />}
          </div>
          <div className="left-importbutton">
            <button type="button" className="left-importbutton-inside">
              Import
            </button>
          </div>
        </div>
      </div>

      <div className="options">
        <div className="options-buttons-left acordionleft">
          <button className="left-collections-button">
            <BsCollection className="collections-but" />
            Collections
          </button>

          <button className="left-environments-button">
            <CiBoxes className="envi-but" />
            Environments
          </button>

          <button className="left-history-button">
            <RiHistoryFill className="history-but" />
            History
          </button>
        </div>

        <div className="options-buttons acordionmenu">
          <div className="left-search">
            <input
              type="text"
              className="left-search-box"
              placeholder="Search It"
            />
            <div className="service-options">
              <SlOptions className="service-options-logo" />
            </div>
          </div>
          <button className="left-collections-button">
            <FaAngleRight className="service-detailslogo" />
            AcentePoliceServisleri
          </button>
          <button className="left-environments-button">
            <FaAngleRight className="service-detailslogo" />
            IProteinSrv_preprod
          </button>
          <button className="left-history-button">
            <FaAngleRight className="service-detailslogo" />
            Payten
          </button>
          <button className="left-collections-button">
            <FaAngleRight className="service-detailslogo" />
            Police İşlemleri V3
          </button>
          <button className="left-environments-button">
            <FaAngleRight className="service-detailslogo" />
            PrivateInsurance.Api
          </button>
          <button className="left-history-button">
            <FaAngleRight className="service-detailslogo" />
            Quick - Sağlık Poliçeleri
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leftworkplace;
