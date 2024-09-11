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
          <div className="item3-1">
            <div className="item3-1-part1">
              <p className="header-p">Automatically follow redirects</p>
            </div>
            <Switch />
          </div>
          <div className="item3-2">
            <p>Follow HTTP 3xx responses as redirects.</p>
          </div>
        </div>

        <div className="item4">
          <div className="item4-1">
            <div className="item4-1-part1">
              <p className="header-p">Follow original HTTP Method</p>
            </div>
            <Switch />
          </div>
          <div className="item4-2">
            <p>
              Redirect with the original HTTP method instead of the default
              behavior of redirecting with GET.
            </p>
          </div>
        </div>
        <div className="item5">
          <div className="item5-1">
            <div className="item5-1-part1">
              <p className="header-p">Follow Authorization header</p>
            </div>
            <Switch />
          </div>
          <div className="item5-2">
            <p>
              Retain authorization header when a redirect happens to a different
              hostname.
            </p>
          </div>
        </div>

        <div className="item6">
          <div className="item6-1">
            <div className="item6-1-part1">
              <p className="header-p">Remove referer header on redirect</p>
            </div>
            <Switch />
          </div>
          <div className="item6-2">
            <p>Remove the referer header when a redirect happens.</p>
          </div>
        </div>

        <div className="item7">
          <div className="item7-1">
            <div className="item7-1-part1">
              <p className="header-p">Enable strict HTTP parser</p>
            </div>
            <Switch />
          </div>
          <div className="item7-2">
            <p>Restrict responses with invalid HTTP headers.</p>
          </div>
        </div>

        <div className="item8">
          <div className="item8-1">
            <div className="item8-1-part1">
              <p className="header-p">Encode URL automatically</p>
            </div>
            <Switch />
          </div>
          <div className="item8-2">
            <p>
              Encode the URL's path, query parameters, and authentication
              fields.
            </p>
          </div>
        </div>

        <div className="item9">
          <div className="item9-1">
            <div className="item9-1-part1">
              <p className="header-p">Disable cookie jar</p>
            </div>
            <Switch />
          </div>
          <div className="item9-2">
            <p>
              Prevent cookies used in this request from being stored in the
              cookie jar. Existing cookies <br />
              in the cookie jar will not be added as headers for this request.
            </p>
          </div>
        </div>

        <div className="item10">
          <div className="item10-1">
            <div className="item10-1-part1">
              <p className="header-p">
                Use server cipher suite during handshake
              </p>
            </div>
            <Switch />
          </div>
          <div className="item10-2">
            <p>
              Use the server's cipher suite order instead of the client's during
              handshake.
            </p>
          </div>
        </div>

        <div className="item11">
          <div className="item11-1">
            <div className="item11-1-part1">
              <p className="header-p">Maximum number of redirects</p>
            </div>
            <Switch />
          </div>
          <div className="item11-2">
            <p>Set a cap on the maximum number of redirects to follow.</p>
          </div>
        </div>

        <div className="item12">
          <div className="item12-1">
            <div className="item12-1-part1">
              <p className="header-p">
                TLS/SSL protocols disabled during handshake
              </p>
            </div>
            <Switch />
          </div>
          <div className="item12-2">
            <p>
              Specify the SSL and TLS protocol versions to be disabled during
              handshake. All other <br />
              protocols will be enabled.
            </p>
          </div>
        </div>

        <div className="item13">
          <div className="item13-1">
            <div className="item13-1-part1">
              <p className="header-p">Cipher suite selection</p>
            </div>
            <Switch />
          </div>
          <div className="item13-2">
            <p>
              Order of cipher suites that the SSL server profile uses to
              establish a secure connection.
            </p>
          </div>
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
