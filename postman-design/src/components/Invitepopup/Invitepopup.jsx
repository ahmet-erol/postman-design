import React, { useState } from "react";
import "./Invitepopup.css";
import { IoInformationCircleOutline } from "react-icons/io5";

function Invitepopup() {
  return (
    <div className="invite-main">
      <div className="invite-content">
        <div className="invite-top">Invite people to this workspace</div>
        <div className="invite-mid">
          <IoInformationCircleOutline size={18} />
          Inviting people will change this into a team workspace.
        </div>
        <div className="invite-bottom">
          <div className="invite-bottom-subdiv">
            <div className="questions">Name, email, or group name</div>
            <div className="add-files">Add from file</div>
          </div>
          <textarea name="" id="" className="invite-textarea"></textarea>
          <button className="send-invite-button">Send Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Invitepopup;
