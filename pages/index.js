import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Navbar from "../components/Navbar";

export default function Home() {
  const [lc, setLC] = useState("");

  useEffect(() => {
    const run = async () => {
      //Request the IP Api
      const res = await axios.get("http://ip-api.com/json");
      const data = res.data;
      setLC(data.countryCode);

      //Set cookie
      Cookies.set("harvey", JSON.stringify(res.data));

      //Also, redirect to the home
      window.location.replace("/home");
    };

    run();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
