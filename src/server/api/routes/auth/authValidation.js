// 3rd party libraries
import Joi from 'joi';

Joi.objectId = require('joi-objectid')(Joi);

// fields
const email = Joi.string().email();
const password = Joi.string();

// login schema
const loginSchema = Joi.object().keys({
  email: email.required(),
  password: password.required(),
});

// logout schema
const logoutSchema = Joi.object().keys({
  email: email.required(),
});

export default {
  loginSchema,
  logoutSchema
};
