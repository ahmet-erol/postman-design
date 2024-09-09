import React from "react";
import "./Tabs6.css";
import { SiPostman } from "react-icons/si";
import Switch from "../../Switch/Switch";
import { useState } from "react";
import Tabs6dropdown from "../../Tabs6dropdown/Tabs6dropdown";

function Tabs6() {
  return (
    <div className="tabs6-main-div">
      <div className="tabs6-top">
        <div className="item1">
          <div className="item1-1">
            <div className="item1-1-part1">
              <p className="header-p">HTTP Version</p>
              <span className="new-span">NEW</span>
            </div>
            <Tabs6dropdown />
          </div>
          <div className="item1-2">
            <p>Select the HTTP version to use for sending the request.</p>
          </div>
        </div>

        <div className="item2">
          <div className="item2-1">
            <div className="item2-1-part1">
              <p className="header-p">Enable SSL certificate verification</p>
            </div>
            <Switch />
          </div>
          <div className="item2-2">
            <p>
              Verify SSL certificates when sending a request. Verification
              failures <br />
              will result in the request being aborted.
            </p>
          </div>
        </div>

        <div className="item3">
          <p className="header-p">Automatically follow redirects</p>
          <p>Follow HTTP 3xx responses as redirects.</p>
        </div>

        <div className="item4">
          <p className="header-p">Follow original HTTP Method</p>
          <p>
            Redirect with the original HTTP method instead of the default
            behavior of redirecting with GET.
          </p>
        </div>

        <div className="item5">
          <p className="header-p"> Follow Authorization header</p>
          <p>
            Retain authorization header when a redirect happens to a different
            hostname.
          </p>
        </div>

        <div className="item6">
          <p className="header-p">Remove referer header on redirect</p>
          <p>Remove the referer header when a redirect happens.</p>
        </div>

        <div className="item7">
          <p className="header-p">Enable strict HTTP parser</p>
          <p>Restrict responses with invalid HTTP headers.</p>
        </div>

        <div className="item8">
          <p className="header-p"> Encode URL automatically</p>
          <p>
            Encode the URL's path, query parameters, and authentication fields.
          </p>
        </div>

        <div className="item9">
          <p className="header-p">Disable cookie jar</p>
          <p>
            Prevent cookies used in this request from being stored in the cookie
            jar. Existing cookies <br />
            in the cookie jar will not be added as headers for this request.
          </p>
        </div>

        <div className="item10">
          <p className="header-p">Use server cipher suite during handshake</p>
          <p>
            Use the server's cipher suite order instead of the client's during
            handshake.
          </p>
        </div>

        <div className="item11">
          <p className="header-p">Maximum number of redirects</p>
          <p>Set a cap on the maximum number of redirects to follow.</p>
        </div>

        <div className="item12">
          <p className="header-p">
            TLS/SSL protocols disabled during handshake
          </p>
          <p>
            Specify the SSL and TLS protocol versions to be disabled during
            handshake. All other <br />
            protocols will be enabled.
          </p>
        </div>

        <div className="item13">
          <p className="header-p">Cipher suite selection</p>
          <p>
            Order of cipher suites that the SSL server profile uses to establish
            a secure connection.
          </p>
        </div>
      </div>
      <div className="tabs6-bottom">
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

export default Tabs6;
