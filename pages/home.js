import React from "react";
import Navbar from "../components/Navbar";

import { Carousel } from "react-round-carousel";
import carouselItemsFirstPage from "../lib/static/carouselItemsFirstPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="heading">Shushh...</h1>
        <p className="desc">
          Friend's breakup? Hot goss on your neighbour's marriage? Your one stop
          Gossip Destination.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="/create">
            <button className="standardButton nButton">Start Now</button>
          </a>
        </div>
      </div>

      <div>
        <div className="division">
          <h2 className="sub-head" style={{ paddingLeft: "5%" }}>
            Discover Communities
          </h2>
          <p className="sub-desc" style={{ paddingLeft: "5%" }}>
            Find goss on your school, office, workplace or neighbourhood.
          </p>

          <div style={{ zoom: 1.2 }}>
            <Carousel items={carouselItemsFirstPage} />
          </div>
        </div>

        <br />
        <br />
        <br />
        <div className="division flex">
          <div>
            <h2 className="sub-head" style={{ paddingLeft: "10%" }}>
              Total Anonymity
            </h2>
            <p className="sub-desc" style={{ paddingLeft: "10%" }}>
              No signups, No names, No emails, nothing. No information is
              captured when you gossip<abbr>*</abbr>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>
                <b>*</b> while creating communities, an account is required
              </p>
            </p>
          </div>

          <div style={{ marginLeft: "170px" }}>
            <img src="/1.jpeg" className="a-img"></img>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .heading {
            margin-top: 0px;
            margin-bottom: 0px;
            text-align: center;
            font-size: 6em;
          }

          .desc {
            margin-top: 0px;
            text-align: center;
            font-size: 1.5em;
          }

          .nButton {
            margin-top: 0px;
            margin-left: auto;
            margin-right: auto;
            width: 120px;
            height: 45px;
            font-size: 18px;
          }

          .sub-head {
            font-size: 3em;
            font-weight: 300;
            margin-bottom: 0px;
          }

          .sub-desc {
            margin-top: 0px;
            font-size: 1em;
            font-weight: 500;
          }

          .flex {
            display: flex;
          }

          .a-img {
            width: 300px;
            height: 400px;
          }
        `}
      </style>
    </>
  );
}
