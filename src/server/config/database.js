import mongoose from 'mongoose';
import bluebird from 'bluebird';

// configure mongoose
mongoose.Promise = bluebird;

module.exports = config => {
  if (process.env.NODE_ENV === 'production') {
    mongoose.connect(config.MONGODB_URI, { useMongoClient: true });
  } else
    mongoose.connect(config.MONGODB_URI, {
      useMongoClient: true
    });
  return mongoose;
};
