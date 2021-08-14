// set running enviornment
const __DEV__ = process.env.NODE_ENV === 'development';
const __STAGING__ = process.env.NODE_ENV === 'staging';

export default {
  staticUrl: '',
  baseUrl: __DEV__ ? 'http://localhost:4000/api' : 'https://api',
};
