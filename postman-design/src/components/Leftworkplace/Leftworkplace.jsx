import React, { useState, useRef, useEffect } from "react";
import "./Leftworkplace.css";
import { FaRegUser } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { RiHistoryFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import Newpopup from "../Newpopup/Newpopup";
import Importpopup from "../Importpopup/Importpopup";

function Leftworkplace() {
  const [newPopup, setNewPopup] = useState(false);
  const [newImport, setNewImport] = useState(false);

  const popupRef = useRef(null);
  const importRef = useRef(null);

  const handleNewClick = () => {
    setNewPopup(true);
    setNewImport(false);
  };

  const handleImportClick = () => {
    setNewImport(true);
    setNewPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setNewPopup(false);
      }
      if (importRef.current && !importRef.current.contains(event.target)) {
        setNewImport(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              onClick={handleNewClick}
            >
              New
            </button>
            {newPopup && <Newpopup ref={popupRef} />}
          </div>
          <div className="left-importbutton">
            <button
              type="button"
              className="left-importbutton-inside"
              onClick={handleImportClick}
            >
              Import
            </button>
            {newImport && <Importpopup ref={importRef} />}
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
