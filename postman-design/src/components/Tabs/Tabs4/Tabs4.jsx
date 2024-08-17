import React, { useState } from "react";
import "./Tabs4.css";
import { SiPostman } from "react-icons/si";

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
            onChange={(e) => setSelectedForm(e.target.value)}
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
            checked={selectedForm === "x-www-form-urlencoded"}
            onChange={(e) => setSelectedForm(e.target.value)}
          />
          x-www-form-urlencoded
        </div>

        <div className="raw">
          <input
            type="radio"
            id="raw"
            name="format"
            value="raw"
            checked={selectedForm === "raw"}
            onChange={(e) => setSelectedForm(e.target.value)}
          />
          raw
        </div>

        <div className="binary">
          <input
            type="radio"
            id="binary"
            name="format"
            value="binary"
            checked={selectedForm === "binary"}
            onChange={(e) => setSelectedForm(e.target.value)}
          />
          binary
        </div>

        <div className="graphql">
          <input
            type="radio"
            id="graphql"
            name="format"
            value="graphql"
            checked={selectedForm === "graphql"}
            onChange={(e) => setSelectedForm(e.target.value)}
          />
          GraphQl
        </div>
      </div>
      <div className="option-tab-contents">
        {/* sekmeler için tasarım */}
        <div className="none-option-desing">
          {selectedForm === "none" && (
            <div className="none-design">
              <div className="none-desing-text">
                <p>This request does not have a body</p>
              </div>
            </div>
          )}
        </div>
        <div className="form-data-option-desing">
          {selectedForm === "form-data" && (
            <div className="form-data-design">
              <table className="custom-table-tab4">
                <thead>
                  <tr>
                    <th></th>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Description</th>
                    <th>Bulk Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <input type="text" placeholder="Key" />
                    </td>
                    <td>
                      <input type="text" placeholder="Value" />
                    </td>
                    <td class="description" colspan="2">
                      <input type="text" placeholder="Description" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="x-option-desing">
          {selectedForm === "x-www-form-urlencoded" && (
            <div className="x-design">
              <table className="custom-table-tab4">
                <thead>
                  <tr>
                    <th></th>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Description</th>
                    <th>Bulk Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <input type="text" placeholder="Key" />
                    </td>
                    <td>
                      <input type="text" placeholder="Value" />
                    </td>
                    <td class="description" colspan="2">
                      <input type="text" placeholder="Description" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="raw-option-desing">
          {selectedForm === "raw" && (
            <div className="raw-design">
              <input type="text" className="raw-input" />
            </div>
          )}
        </div>
      </div>

      <div className="bottom-tabs4-div">
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

export default Tabs4;
