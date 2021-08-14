import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../config/Reactotron';
import reducers from './reducers';
import api from '../api';

export default () => {
  const middlewares = [];

  // init thunk middleware
  const thunkMiddleware = thunk.withExtraArgument(api);
  middlewares.push(thunkMiddleware);

  let store;
  if (process.env.NODE_ENV === 'development') {
    // only use Reactotron debugger in DEV mode
    store = Reactotron.createStore(reducers, applyMiddleware(...middlewares));
  } else {
    store = createStore(reducers, applyMiddleware(...middlewares));
  }

  return store;
};
