/* eslint-disable no-console */
const __DEV__ = process.env.NODE_ENV === 'development';
const storageType = 'localStorage';

const log = (name, value, preview = '') => {
  if (__DEV__) {
    // log to Reactotron and console in development mode
    const Reactotron = require('reactotron-react-js').default; //eslint-disable-line
    Reactotron.display({ name, preview, value });
    console.log(name, value);
  }
};

if (typeof window !== 'undefined') log('STORAGE', window.localStorage, storageType);

const getItem = key => {
  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      log('STORAGE READ', { [key]: item }, key);
      return JSON.parse(item);
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const setItem = (key, value) => {
  try {
    if (!key || !value) return false;
    const item = JSON.stringify(value);
    window.localStorage.setItem(key, item);
    log('STORAGE WRITE', { [key]: item }, key);
    return true;
  } catch (error) {
    throw error;
  }
};

const removeItem = key => {
  try {
    if (!key) return false;
    window.localStorage.removeItem(key);
    log('STORAGE REMOVE', key, key);
    return true;
  } catch (error) {
    throw error;
  }
};

export default {
  getItem,
  setItem,
  removeItem,
};
