import express from 'express';
import boom from 'boom';
import controller from './controller';

// create main RESTFul API router
const publicRouter = express.Router();

publicRouter.get('/', controller.load);

export default publicRouter;
