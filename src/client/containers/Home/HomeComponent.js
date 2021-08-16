import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import useStyles from "./HomeStyle";

const ENDPOINT = "http://localhost:4000";

const WorldMap = require('react-svg-worldmap').WorldMap;


function Home() {
  const [response, setResponse] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    return () => socket.disconnect();
  }, []);

  return (
      <WorldMap color="green" frame="true" size="xxl" data={[]} />
  );
}
export default Home;