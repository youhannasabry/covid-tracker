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

// bind the app to the port
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Application is up and running in the ${config.env} mode on port ${port} \n URL: http://localhost:${port}/`
  );
});

// export the app for the testing
export default app;

// test test test
