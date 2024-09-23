import React, { useState, useRef, useEffect } from "react";
import "./Importpopup.css";

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
      <div className="topbottom-import"></div>
      <div className="middile-import"></div>
      <div className="footer-import"></div>
    </div>
  );
}

export default Importpopup;
