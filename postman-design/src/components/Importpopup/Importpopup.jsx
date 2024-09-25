import React, { useState, useRef, useEffect } from "react";
import "./Importpopup.css";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

function Importpopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const importRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (importRef.current && !importRef.current.contains(event.target)) {
        onClose();
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
        <div className="footer-left">
          <BsFillWrenchAdjustableCircleFill size={18} />
          Migrate to Postman
          <FaAngleDown />
        </div>
        <div className="footer-mid">Other Sources</div>
        <div className="footer-right"></div>
      </div>
    </div>
  );
}

export default Importpopup;
