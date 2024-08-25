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
        <textarea
          name="text-area"
          id="textarea"
          placeholder="Use JavaScript to configure this request dynamically."
          className="middle-textarea"
        ></textarea>
      </div>

      <div className="tabs5-right">
        <div className="tabs5-right-top">
          <div className="tabs5-right-headertext">Packages</div>
          <div className="tabs5-right-openpackages">
            <div>Open package library</div>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="tabs5-right-down">
          <div className="tabs5-right-down-slidercontent">
            <p className="snippets">Snippets</p>
            <p>Get an environment variable</p>
            <p>Get a global variable</p>
            <p>Get a variable</p>
            <p>Get a collection variable</p>
            <p>Set an environment variable</p>
            <p>Set a global variable</p>
            <p>Set a collection variable</p>
            <p>Clear an environment variable</p>
            <p>Clear a global variable</p>
            <p>Clear a colletion variable</p>
            <p>Send a request</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs5;
