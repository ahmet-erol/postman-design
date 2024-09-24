import React, { useState, useRef, useEffect } from "react";
import "./Importpopup.css";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { CiImport } from "react-icons/ci";

function Importpopup() {
  const [isOpen, setIsOpen] = useState(false);
  const importRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (importRef.current && !importRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="import-main">
      <div className="top-import">
        <input
          type="text"
          placeholder="Paste cURL, Raw text or URL..."
          className={`import-top-text ${isOpen ? "active" : ""}`}
          onClick={handleInputClick}
          ref={importRef}
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
        <div className="footer-left"></div>
        <div className="footer-mid"></div>
        <div className="footer-right"></div>
      </div>
    </div>
  );
}

export default Importpopup;
