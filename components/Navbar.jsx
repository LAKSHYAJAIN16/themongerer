import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="main">
        <div className="content">
          <a href="/">
            <p className="logotxt">themongerer</p>
          </a>

          <a href="/create" className="link">
            create
          </a>

          <a href="/communities" className="link">
            communities
          </a>

          <a href="/create" className="link">
            trending
          </a>

          <a href="/create" className="link">
            search
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            margin-top: 0px;
          }

          .content {
            margin-top: 0px;
            display: flex;
            align-items: center;
            flex-direction: row;
            // border-bottom : 1px solid grey;
            height: 70px;
          }

          .logotxt {
            margin-top: 0px;
            margin-right: 20px;
            font-weight: 400;
            font-size: 1.9em;
            padding-left: 20px;
            padding-top: 10px;
          }

          .link {
            margin-top: -15px;
            margin-left: 80px;
            font-size: 1.2em;
            color: grey;
            transition: all 500ms ease;
          }

          .link:hover {
            color: black;
          }
        `}
      </style>
    </>
  );
}
