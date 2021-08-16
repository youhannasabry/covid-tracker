import Immutable from 'seamless-immutable';
import storage from '../../utils/storage';

/* ------------- Actions ------------- */
const LOGIN_REQUEST = 'covidTracker/Auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'covidTracker/Auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'covidTracker/Auth/LOGIN_ERROR';

const LOGOUT = 'covidTracker/Auth/LOGOUT';

/* ------------- initial state ------------- */
const initialState = Immutable({
  user: null,
  userDefaultCountry: {},
  loading: false,
  error: false,
});

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.merge({ loading: true });

    case LOGIN_SUCCESS:
      return state.merge({
        loading: false,
        user: action.payload.user,
      });

    case LOGIN_ERROR:
      return state.merge({ loading: false, error: action.payload.error });

    case LOGOUT:
      return state.merge({ user: null });

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, payload: { user } };
}

export function loginError(error) {
  return { type: LOGIN_ERROR, payload: { error } };
}

export function logoutSuccess() {
  return { type: LOGOUT };
}

/* ------------- Thunks ------------- */
export function postLogin(user, token) {
  return async (dispatch) => { //eslint-disable-line
    try {
      if (user && token) {
        storage.setItem('jwt', token);
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };
}
export function postLogout() {
  return async dispatch => {
    try {
      storage.removeItem('jwt');
    } catch (error) {
      dispatch(loginError(error));
    }
  };
}
export function loadToken() {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loginRequest());
      const result = await api.AuthModel.verifyToken();
      if (!result) return dispatch(loginError());
      const { user, token } = result && result.data;
      if (user && token) {
        dispatch(postLogin(user, token));
        return dispatch(loginSuccess(user));
      }
      return dispatch(loginError());
    } catch (error) {
      return dispatch(loginError(error));
    }
  };
}
export function login(credentials) {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loginRequest());
      const result = await api.AuthModel.login(credentials);
      const { user, token } = result && result.data;
      if (user && token) {
        await storage.setItem('jwt', token);
        dispatch(loadToken());
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };
}
export function logout() {
  return async dispatch => {
    try {
      dispatch(postLogout());
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(loginError(error));
    }
  };
}

export function changeSettings(setting, value) {
  return async dispatch => {
    return dispatch(loadToken());
  };
}
