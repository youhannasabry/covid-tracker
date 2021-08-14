// 3rd party libraries
import jwt from 'jsonwebtoken';
import boom from 'boom';
import mongoose from 'mongoose';

const generateToken = user => {
  return jwt.sign({ id: user._id, email: user.email }, global.serverConfig.JWT_TOKEN, {
    expiresIn: 60 * 60 * 24 * 30 * 6, // expires in 6 months - time in seconds
  });
};

const verifyToken = (token, callback) => {
  jwt.verify(token, global.serverConfig.JWT_TOKEN, async (err, decodedData) => {
    if (err) return callback(err);
    const user = await global.models.User.findOne({ _id: decodedData.id });
    return callback(null, user);
  });
};

const authenticate = async (req, res, next) => {
  // check if the user already exists
  if (req.user) {
    return next();
  }

  // check if the token exists to get the user
  let token = req.get('authorization') || req.query.authorization;
  const { key } = req.query;
  if (token) {
    token = token.replace('Bearer ', '');
    verifyToken(token, async (err, user) => {
      if (err) {
        return res.status(401).json({
          statusCode: 401,
          error: 'Un-Authorized',
          message: 'Invalid authorization token',
          details: 'Invalid authorization token',
        });
      }
      req.user = user;
      req.token = token;
      next();
    });
  } else if (key) {
    // const user = await user.findByKey(key);
    // if (!admin) throw Error('Can Not Find Admin;');
    // req.user = admin;
    req.key = key;
    next();
  } else {
    return res.status(401).json({
      statusCode: 401,
      error: 'Un-Authorized',
      message: 'Missing authorization token',
      details: 'Missing authorization token',
    });
  }
};

export { authenticate, verifyToken, generateToken };
