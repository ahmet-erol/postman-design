import React, { useState } from "react";
import "./Tabs1.css";

function Tabs1() {
  return (
    <div className="main-tab1-div">
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
  );
}

export default Tabs1;
