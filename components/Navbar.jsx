import React from "react";

export default function Navbar() {
  return (
    <div className="main">
      <div className="content">
        <p className="heading">themongerer</p>

        <a href="/create" className="link">
          create
        </a>

        <a href="/create" className="link">
          search
        </a>

        <a href="/create" className="link">
          near you
        </a>

        <a href="/create" className="link">
          communities
        </a>
      </div>

      <style jsx>
        {`
          .main {
            position: fixed;
          }

          .content {
            margin-top: 0px;
            display: flex;
          }

          .heading {
            margin-top: 0px;
            margin-right: 80px;
            font-size: 2em;
            font-weight: 400;
            padding-top: 5px;
            padding-left: 40px;
            color: black;
          }

          .link {
            margin-top: 14px;
            margin-left: 70px;
            font-size: 1.3em;
            font-weight: 200;
            transition: all 200ms ease;
            color: grey;
          }

          .link:hover {
            color: black;
          }
        `}
      </style>
    </div>
  );
}
