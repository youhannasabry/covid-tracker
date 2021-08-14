import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './client/containers/App/AppContainer';
import createStore from './client/redux';
import './index.css';
// Clear Reactotron on every app refresh in dev mode
process.env.NODE_ENV === 'development' && console.tron && console.tron.clear(); //eslint-disable-line

const store = createStore();

const Root = () => (
  <Provider store={store}>
    <link rel="stylesheet" href="https://use.typekit.net/kzl2kzp.css" />
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
