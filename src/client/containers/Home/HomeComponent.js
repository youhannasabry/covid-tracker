import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";

const WorldMap = require('react-svg-worldmap').WorldMap;


function Home() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {

      let serializedData = [];

      for (let obj of data) {
        let exists = serializedData.find(o => o.country === obj.country);
        if (exists)
          exists.value += 1;
        else
          serializedData.push({ country: obj.country, value: 1 })
      }

      console.log(serializedData);
      setResponse(serializedData);
    });
    return () => socket.disconnect();
  }, []);


  return (
    <WorldMap color="green" frame="true" size="xxl" data={response || []} />
  );
}
export default Home;