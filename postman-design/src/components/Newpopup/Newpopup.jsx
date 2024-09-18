import React, { useState, useEffect, useRef, forwardRef } from "react";
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

const Newpopup = forwardRef((props, ref) => {
  const [footerContent, setFooterContent] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const popupRef = ref || useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  if (!isOpen) return null;

  return (
    <div className="newpopup-main" ref={popupRef}>
      <div className="popup-top">
        <div
          className="popup-http"
          onMouseEnter={() =>
            setFooterContent(
              "Hypertext Transfer Protocol (HTTP) is an application-layer protocol often used to build REST APIs Test your HTTP API with an HTTP request."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "Hypertext Transfer Protocol (HTTP) is an application-layer protocol often used to build REST APIs Test your HTTP API with an HTTP request."
            )
          }
        >
          <MdHttp className="photo-1" />
          HTTP
        </div>
        <div
          className="popup-graphql"
          onMouseEnter={() =>
            setFooterContent(
              "GraphQL is a query language for APIs that's designed to provide the client with exactly the information it asks for. Test your GraphQL APIs with a GraphQL request."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "GraphQL is a query language for APIs that's designed to provide the client with exactly the information it asks for. Test your GraphQL APIs with a GraphQL request."
            )
          }
        >
          <GrGraphQl className="photo-2" />
          Graphql
        </div>
        <div
          className="popup-grpc"
          onMouseEnter={() =>
            setFooterContent(
              "gRPC is a highly performant RPC framework often used to build microservices. Test your gRPC APIs with a gRPC request."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "gRPC is a highly performant RPC framework often used to build microservices. Test your gRPC APIs with a gRPC request."
            )
          }
        >
          <GoArrowBoth className="photo-3" />
          gRPC
        </div>
        <div
          className="popup-websocket"
          onMouseEnter={() =>
            setFooterContent(
              "WebSocket enables real-time communication between the client and the server using a persistent communication channel. Test WebSocket based APIs with a WebSocket request."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "WebSocket enables real-time communication between the client and the server using a persistent communication channel. Test WebSocket based APIs with a WebSocket request."
            )
          }
        >
          <MdElectricalServices className="photo-4" />
          WebSocket
        </div>
        <div
          className="popup-websocket"
          onMouseEnter={() =>
            setFooterContent(
              "Socket.IO is a framework built on top of WebSocket to enable event driven client-server communication. Test Socket.IO based APIs with a Socket.IO request."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "Socket.IO is a framework built on top of WebSocket to enable event driven client-server communication. Test Socket.IO based APIs with a Socket.IO request."
            )
          }
        >
          <TbBrandSocketIo className="photo-5" />
          Socket.IO
        </div>
      </div>

      <div className="popup-bottom">
        <div
          className="popup-http"
          onMouseEnter={() =>
            setFooterContent(
              "MQTT is a lightweight messaging protocol widely used for the internet of things (IoT). Test MQTT based APIs with an MQTT request."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "MQTT is a lightweight messaging protocol widely used for the internet of things (IoT). Test MQTT based APIs with an MQTT request."
            )
          }
        >
          <SiMqtt className="photo-6" />
          MQTT
        </div>
        <div
          className="popup-graphql"
          onMouseEnter={() =>
            setFooterContent(
              "Create a collection to organize, document and share your API requests with others."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "Create a collection to organize, document and share your API requests with others."
            )
          }
        >
          <BsCollection className="photo-7" />
          Collection
        </div>
        <div
          className="popup-grpc"
          onMouseEnter={() =>
            setFooterContent(
              "Define and use sets of variables across multiple API requests using environments."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "Define and use sets of variables across multiple API requests using environments."
            )
          }
        >
          <FaEnvira className="photo-8" />
          Environment
        </div>
        <div
          className="popup-websocket"
          onMouseEnter={() =>
            setFooterContent(
              "Postman Flows is a visual tool to build API-driven applications. Use flows to chainrequests, handle data, and create real-world workflows in your workspace."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "Postman Flows is a visual tool to build API-driven applications. Use flows to chainrequests, handle data, and create real-world workflows in your workspace."
            )
          }
        >
          <GoWorkflow className="photo-9" />
          Flow
        </div>
        <div
          className="popup-websocket"
          onMouseEnter={() =>
            setFooterContent(
              "Stay organized and collaborate with your teammates using workspaces."
            )
          }
          onMouseLeave={() =>
            setFooterContent(
              "Stay organized and collaborate with your teammates using workspaces."
            )
          }
        >
          <SiWindows className="photo-10" />
          Workspace
        </div>
      </div>

      <div className="popup-footer">{footerContent}</div>
    </div>
  );
});

export default Newpopup;
