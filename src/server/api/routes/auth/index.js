import express from 'express';
import authController from './authController';
import { authenticate } from '../../../middlewares/authMiddleware';

const authRouter = express.Router();

/*          define routes           */

// auth routes
authRouter.post('/login', authController.logIn);
authRouter.get('/verify-token', authenticate, authController.verifyToken);
authRouter.get('/logout', authenticate, authController.logOut);

// signup routes
// authRouter.post('/signup', authenticate, authController.addCourier);

export default authRouter;
