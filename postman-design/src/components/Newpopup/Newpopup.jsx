import React from "react";
import "./Newpopup.css";
import { MdHttp } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { GoArrowBoth } from "react-icons/go";
import { MdElectricalServices } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiMqtt } from "react-icons/si";
import { FaEnvira } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import { GoWorkflow } from "react-icons/go";
import { SiWindows } from "react-icons/si";

function Newpopup() {
  return (
    <div className="newpopup-main">
      <div className="popup-top">
        <div className="popup-http">
          <MdHttp className="photo-1" />
          HTTP
        </div>
        <div className="popup-graphql">
          <GrGraphQl className="photo-2" />
          Graphql
        </div>
        <div className="popup-grpc">
          <GoArrowBoth className="photo-3" />
          gRPC
        </div>
        <div className="popup-websocket">
          <MdElectricalServices className="photo-4" />
          WebSocket
        </div>
        <div className="popup-websocket">
          <TbBrandSocketIo className="photo-5" />
          Socket.IO
        </div>
      </div>

      <div className="popup-bottom">
        <div className="popup-http">
          <SiMqtt className="photo-6" />
          MQTT
        </div>
        <div className="popup-graphql">
          <BsCollection className="photo-7" />
          Collection
        </div>
        <div className="popup-grpc">
          <FaEnvira className="photo-8" />
          Environment
        </div>
        <div className="popup-websocket">
          <GoWorkflow className="photo-9" />
          Flow
        </div>
        <div className="popup-websocket">
          <SiWindows className="photo-10" />
          Workspace
        </div>
      </div>

      <div className="popup-footer">footer</div>
    </div>
  );
}

export default Newpopup;
