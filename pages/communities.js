import React from "react";
import Navbar from "../components/Navbar";

export default function Communities() {
  return (
    <>
      <div>
        <Navbar />

        <div className="main">
          <h1 className="a-head">Topics</h1>

          <input className="search"></input>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            margin-top: 0px;
          }

          .a-head {
            text-align: center;
            font-weight: 200;
            font-size: 2.5em;
            margin-top: -10px;
          }
        `}
      </style>
    </>
  );
}
