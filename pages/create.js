import React, { useState, useRef } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";

export default function create() {
  const [ui, setUi] = useState(0);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const txt = useRef();

  const contentToTitle = () => {
    setUi(1);
  };

  const titleToContent = async () => {
    setUi(0);

    //TO DO : Make it so that the text remains
  };

  const submit = async () => {
    setLoading(true);
    //Get the IP address
    const res = await axios.get("http://ip-api.com/json");

    //Get the required data
    const lat = res.data.lat;
    const long = res.data.lon;
    const country = res.data.country;
    const city = res.data.city;
    const regionName = res.data.regionName;
    const ip = res.data.query;

    //Compile a data object
    const payload = {
      content: content,
      postName: title,
      lat: lat,
      long: long,
      security: {
        country,
        city,
        regionName,
        ip,
      },
    };

    //Send it to our Backend
    const res2 = await axios.post("/api/db/posts/create", payload);
    console.log(res2);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      <div className="head">
        {ui === 0 ? (
          <>
            <h1 className="a-head">What's the Scoop?</h1>
            <p className="a-desc">
              A secret reason for your friend to buy a new house? Your take on
              your boss's divorce? Gossip all you want{" "}
              <b>totally anonymously!</b>
            </p>

            <textarea
              className="a-textarea"
              id="txt-area-content"
              onChange={(e) => setContent(e.target.value)}
              ref={txt}
            ></textarea>

            <button
              className="standardButton nextButton"
              onClick={() => contentToTitle()}
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <h1 className="a-head">Give a title!</h1>
            <p className="a-desc">
              "friend is a vampire" or "boss getting divorced because of her
              cat" Anything you want!
            </p>

            <input
              className="a-input"
              id="input-thingy-lol"
              onChange={(e) => setTitle(e.target.value)}
            ></input>

            <p className="toc">
              By clicking submit, you agree to our terms and conditions
            </p>

            <div className="buttons">
              {/* <button
                className="standardButton"
                onClick={() => titleToContent()}
              >
                Prev
              </button> */}

              <button
                className="standardButton"
                style={{ marginLeft: "0px" }}
                onClick={() => submit()}
                id="submitBOI"
              >
                <span>
                  {loading === false ? (
                    <span> Submit</span>
                  ) : (
                    <div
                      style={{
                        marginLeft: "27px",
                      }}
                    >
                      <div className="loader"></div>
                    </div>
                  )}
                </span>
              </button>
            </div>
          </>
        )}
      </div>

      <style>
        {`
        .head {
          margin-top : 0px;
        }

        .a-head {
          text-align : center;
          font-weight : 200;
          font-size : 3em;
          margin-top : -10px;
        }

        .a-desc {
          text-align : center;
          margin-top : -20px;
        }

        .a-textarea {
          resize : none;
          width : 70%;
          height : 150px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          font-family : var(--mainfont);
          font-size : 1.2em;
        }

        .a-input {
          resize : none;
          width : 60%;
          height : 50px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          font-family : var(--mainfont);
          font-size : 1.4em;
        }

        .nextButton {
          display : block;
          margin-left : auto;
          margin-right : auto;
          margin-top : 30px;
        }

        .buttons {
          display : flex;
          justify-content : center;
          margin-top : 30px;
        }

        .toc {
          text-align : center;
          font-size : 0.8em;
        }
        `}
      </style>
    </div>
  );
}
