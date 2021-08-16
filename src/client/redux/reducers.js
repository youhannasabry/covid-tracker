import { combineReducers } from 'redux';

import AppReducer from '../containers/App/AppRedux';
import HomeReducer from '../containers/Home/HomeRedux';
import SnackBarReducer from '../lib/snackbar/snackbar-redux';

export default combineReducers({
  app: AppReducer,
  home: HomeReducer,
  snackbar: SnackBarReducer,
});
