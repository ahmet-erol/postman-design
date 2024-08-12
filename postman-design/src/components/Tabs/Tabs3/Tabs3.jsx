import React, { useState } from "react";
import "./Tabs3.css";

function Tabs3() {
  return (
    <div className="main-tab3-div">
      <div className="header-text-tab3">Headers</div>

      <div>
        <table class="custom-table-tab3">
          <thead>
            <tr>
              <th></th>
              <th>Key</th>
              <th>Value</th>
              <th>Description</th>
              <th>Bulk Edit</th>
              <th>Presets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" defaultValue="Authorization" />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue="BU0FSIERFVEFZIn1dfSx7IklkIjo"
                />
              </td>
              <td class="description" colspan="3">
                <input type="text" placeholder="Description" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="text" defaultValue="CompanyIdentifier" />
              </td>
              <td>
                <input type="text" defaultValue="85ee5631-ab92" />
              </td>
              <td class="description" colspan="3">
                <input type="text" placeholder="Description" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabs3;
