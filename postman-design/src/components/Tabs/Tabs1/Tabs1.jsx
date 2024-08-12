import React, { useState } from "react";
import "./Tabs1.css";
import { SiPostman } from "react-icons/si";

function Tabs1() {
  return (
    <div className="main-tab-div">
      <div className="up-div">
        <div className="header-text-tab1">Query Params</div>
        <div>
          <table class="custom-table">
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
      </div>

      <div className="down-div">
        Response
        <div className="response-icon">
          <SiPostman />
          <div className="response-icontext">Click Send to get a response</div>
        </div>
      </div>
    </div>
  );
}

export default Tabs1;
