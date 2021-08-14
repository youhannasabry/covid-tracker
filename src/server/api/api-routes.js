import express from 'express';
import authAPI from './routes/auth';
import publicAPI from './routes/public';
import { authenticate } from '../middlewares/authMiddleware';

// create main RESTFul API router
const restRouter = express.Router();
restRouter.use('/auth', authAPI);
restRouter.use('/public', publicAPI);

export default restRouter;
