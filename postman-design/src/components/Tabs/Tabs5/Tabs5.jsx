import React from "react";
import "./Tabs5.css";
import { BsArrowRight } from "react-icons/bs";

function Tabs5() {
  return (
    <div className="tabs5-main-div">
      <div className="tabs5-left">
        <button className="tabs5-left-button">Pre-request</button>

        <button className="tabs5-left-button">Post-response</button>
      </div>

      <div className="tabs5-middle">
        <textarea name="text-area" id="textarea" className="middle-textarea">
          1 Use JavaScript to configure this request dynamically.
        </textarea>
      </div>

      <div className="tabs5-right">
        <div className="tabs5-right-headertext">Packages</div>
        <div className="tabs5-right-openpackages">
          <div>Open package library</div>
          <div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs5;
