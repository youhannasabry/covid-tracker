import express from 'express';
import publicAPI from './routes/public';

// create main RESTFul API router
const restRouter = express.Router();
restRouter.use('/public', publicAPI);

export default restRouter;
