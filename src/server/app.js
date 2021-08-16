import '@babel/polyfill';
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import bluebird from 'bluebird';
import cors from 'cors';
import responseWrapper from './middlewares/responseWrapper';
// own files
global.appRoot = path.resolve(__dirname);
import config from './config/config';
require('./config/database')(config);
const socketIo = require("socket.io");
const http = require("http");
const { Log } = require('./models');

//Define global models here
// global.models = require('elprices-models')({
//   elastic: config.ELASTICSEARCH,
//   inventoryUrl: config.INVENTORY.url,
// });

const restRouter = require('./api/api-routes');


// create new express app and get the port
const app = express();
const port = config.PORT;

// configure the app
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
global.Promise = bluebird;

// register the API endpoints
app.use('/api', restRouter.default);

// serve static client code
app.use(express.static(path.join(__dirname, '../build')));

// redirect all routes to index.html, required for SPA
// because we are using client-side routing
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// error handler
app.use(responseWrapper.errorHandler);

// data handler
app.use(responseWrapper.dataHandler);

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4001"
  }
});
let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = async socket => {
  let response = await Log.find({ temperature: { $gt: 37 } }).lean();

  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));

// bind the app to the port
// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(
//     `Application is up and running in the ${config.env} mode on port ${port} \n URL: http://localhost:${port}/`
//   );
// });

// export the app for the testing
export default app;

// test test test
