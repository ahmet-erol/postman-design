import React, { useState } from "react";
import "./Tabs2.css";

function Tabs2() {
  return (
    <div className="tab2-main-div">
      <div className="tab2-left-div">
        <h4>Auth Type</h4>
        <input type="text" value="Inherit auth from parent" />
        <p>
          The authorization header will be <br />
          automatically generated when you <br />
          send the request. Learn more about authorization.
        </p>
      </div>

      <div className="tab2-right-div">
        <h1>
          This request is using No Auth from collection Poliçe İşlemleri V3.
        </h1>
      </div>
    </div>
  );
}

export default Tabs2;
