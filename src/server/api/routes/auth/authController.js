// 3rd party libraries
import Joi from 'joi';
import boom from 'boom';
import { pick } from 'lodash';
import { generateToken } from '../../../middlewares/authMiddleware';
import validationSchemas from './authValidation';

// auth routes
const verifyToken = async (req, res, next) => {
  const user = {
    ...pick(req.user, ['_id', 'name', 'email', 'phone'])
  };
  return next({
    message: 'Token Verified',
    data: { user, token: req.token },
  });
};
const logIn = async (req, res, next) => {
  // get user credntials
  const body = pick(req.body, ['email', 'password']);

  // validate parameters
  const validationResult = Joi.validate(body, validationSchemas.loginSchema);

  if (validationResult.error) {
    return next(boom.badRequest('Invalid login', validationResult.error.details));
  }

  try {
    // generate token
    const token = generateToken(admin);
    const user = {
      ...pick(admin, ['_id', 'name', 'email', 'phone']),
    };
    return next({
      message: 'Logged In Successfully',
      data: { user, token },
    });
  } catch (e) {
    return next(boom.badRequest('Invalid Credentials', [{ message: e.message }]));
  }
};
const logOut = async (req, res, next) => {
  // release token and user
  req.user = null;
  req.token = null;
  return next({ message: 'Logged Out Successfully' });
};

export default {
  logIn,
  logOut,
  verifyToken
};
