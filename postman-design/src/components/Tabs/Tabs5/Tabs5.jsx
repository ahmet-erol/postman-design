import { useState } from "react";
import React from "react";
import "./Tabs5.css";
import { BsArrowRight } from "react-icons/bs";
import { SiPostman } from "react-icons/si";

function Tabs5() {
  const [activeButton, setActiveButton] = useState("prerequest");
  return (
    <div className="tabs5-main-div">
      <div className="tabs5-top">
        <div className="tabs5-left">
          <button
            className={`tabs5-left-button ${
              activeButton === "prerequest" ? "active" : ""
            }`}
            onClick={() => setActiveButton("prerequest")}
          >
            Pre-request
          </button>

          <button
            className={`tabs5-left-buttonsecond ${
              activeButton === "postresponse" ? "active" : ""
            }`}
            onClick={() => setActiveButton("postresponse")}
          >
            Post-response
          </button>
        </div>

        <div className="tabs5-middle">
          {activeButton === "prerequest" && (
            <textarea
              name="text-area"
              id="textarea"
              placeholder="Use JavaScript to configure this request dynamically."
              className="middle-textarea"
            ></textarea>
          )}

          {activeButton === "postresponse" && (
            <textarea
              name="text-area"
              id="textarea"
              placeholder="Use JavaScript to write tests, visualize response, more ."
              className="middle-textarea"
            ></textarea>
          )}
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

      <div className="tabs5-bottom">
        Response
        <div className="response-icon-tab4">
          <SiPostman />
          <div className="response-icontext-tab4">
            Click Send to get a response
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs5;
