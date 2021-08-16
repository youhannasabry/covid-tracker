import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";

const WorldMap = require('react-svg-worldmap').WorldMap;


function Home() {
  const [response, setResponse] = useState([]);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setData(data);
      let serializedData = [];

      for (let obj of data) {
        let exists = serializedData.find(o => o.country === obj.country);
        if (exists)
          exists.value += 1;
        else
          serializedData.push({ country: obj.country, value: 1 })
      }

      setResponse(serializedData);
    });
    return () => socket.disconnect();
  }, []);

  const clickAction = (event, countryName, isoCode, value, prefix, suffix) => {
    let names = [];
    for (let item of data) {
      if (item.country === isoCode || item.country.toUpperCase() === isoCode) {
        names.push(item.name)
      }
    }
    const listNames = names.map((name) =>
      <li>{name}</li>
    );
    setNames(listNames);
  }

  return (
    <div>
      <WorldMap color="green" frame="true" size="xxl" data={response || []} onClickFunction={clickAction} />
      <Typography variant="h6">Patient Names</Typography>
      <Typography variant="subtitle">Click on a country to see the patients</Typography>
      <hr />
      <Typography>{names}</Typography>
    </div>
  );
}
export default Home;