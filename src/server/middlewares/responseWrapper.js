// 3rd party libraries
import boom from 'boom';

const errorHandler = (payload, req, res, next) => { // eslint-disable-line
  if (boom.isBoom(payload)) {
    // TODO: log errors if needed
    return res
      .status(payload.output.statusCode)
      .json({ ...payload.output.payload, details: payload.data[0].message });
  }
  next(payload);
};

const dataHandler = (payload, req, res, next) => { // eslint-disable-line
  // eslint-disable-next-line no-console
  return res.status(200).json({
    statusCode: 200,
    message: payload.message ? payload.message : 'data successfully retrieved',
    data: payload.data,
  });
};

// wrapper for our async route handlers
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => { // eslint-disable-line
    if (!err.isBoom) {
      return next(boom.badImplementation(err));
    }
    next(err);
  });
};

module.exports = {
  errorHandler,
  asyncMiddleware,
  dataHandler,
};
