import React, { useState } from "react";
import "./Tabs4.css";

function Tabs4() {
  const [selectedForm, setSelectedForm] = useState("none");

  return (
    <div className="main-tabs4-div">
      <div className="top-tabs4-div">
        <div className="none-option">
          <input
            type="radio"
            id="none"
            name="format"
            value="none"
            checked={selectedForm === "none"}
            onChange={(e) => setSelectedForm(e.target.value)} //DİĞERLERİNE DE YAPMAYI UNUTMA
          />
          none
        </div>

        <div className="formdata-option">
          <input
            type="radio"
            id="form-data"
            name="format"
            value="form-data"
            checked={selectedForm === "form-data"}
            onChange={(e) => setSelectedForm(e.target.value)}
          />
          form-data
        </div>

        <div className="x-www-form-urlencoded">
          <input
            type="radio"
            id="x-www-form-urlencoded"
            name="format"
            value="x-www-form-urlencoded"
          />
          x-www-form-urlencoded
        </div>

        <div className="raw">
          <input type="radio" id="raw" name="format" value="raw" />
          raw
        </div>

        <div className="binary">
          <input type="radio" id="binary" name="format" value="binary" />
          binary
        </div>

        <div className="graphql">
          <input type="radio" id="graphql" name="format" value="graphql" />
          GraphQl
        </div>
      </div>

      <div className="bottom-tabs4-div"></div>
    </div>
  );
}

export default Tabs4;
