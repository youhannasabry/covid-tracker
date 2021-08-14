/* eslint-disable no-console */
import axios from 'axios';
import server from '../constants/server';
import storage from '../utils/storage';

// set running enviornment
const __DEV__ = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: server.baseUrl,
});

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

let token = null;
//Add item to request headers here
// let country = null;

// Request Headers
export const getRequestHeaders = () => {
  if (!token) {
    const jwt = storage.getItem('jwt');
    if (jwt) {
      token = jwt;
    }
  }
  // const selectedCountry = storage.getItem('country');

  // return { selectedCountry };
};

/**
 * Request Wrapper with default success/error actions
 */
const request = async options => {
  const onSuccess = response => {
    if (__DEV__) {
      console.log('BEG ##########');
      console.tron.display({
        name: 'API RESPONSE',
        preview: response.config.url,
        value: response,
      });
      console.log('%cRequest Successful!', 'color: blue; font-weight: bold;', response.config.url);
      console.log(response);
      console.log('END ##########');
    }
    return response.data;
  };
  const onError = error => {
    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      if (__DEV__) {
        console.tron.display({
          name: 'API ERROR',
          preview: error.response.config.url,
          value: error,
        });
        console.log(
          '%cRequest Error!',
          'color: red; font-weight: bold;',
          error.response.config.url
        );
        console.log('options: ', options);
        console.log('Status:', error.response.status);
        console.log('Data:', error.response.data);
        console.log('Headers:', error.response.headers);
      }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log('Error Message:', error.message);
    }

    return Promise.reject((error.response && error.response.data) || error);
  };
  getRequestHeaders();
  defaultOptions.headers = {
    ...defaultOptions.headers,
    authorization: `Bearer ${token}`,
    // country,
  };

  return client({ ...defaultOptions, ...options })
    .then(onSuccess)
    .catch(onError);
};

export default request;
