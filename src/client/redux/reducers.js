import { combineReducers } from 'redux';

import AppReducer from '../containers/App/AppRedux';
import HomeReducer from '../containers/Home/HomeRedux';
import SnackBarReducer from '../lib/snackbar/snackbar-redux';
import AuthReducer from '../containers/Auth/AuthRedux';

export default combineReducers({
  app: AppReducer,
  home: HomeReducer,
  auth: AuthReducer,
  snackbar: SnackBarReducer,
});
