import Immutable from 'seamless-immutable';

/* ------------- Actions ------------- */
const APP_STARTED_REQUEST = 'covidTracker/App/APP_STARTED_REQUEST';
const APP_STARTED_SUCCESS = 'covidTracker/App/APP_STARTED_SUCCESS';
const APP_STARTED_ERROR = 'covidTracker/App/APP_STARTED_ERROR';

const CHANGE_LOCALE = 'covidTracker/App/CHANGE_LOCALE';

/* ------------- initial state ------------- */
const initialState = Immutable({
  initialized: false,
  loading: true,
  appError: '',
  open: false
});

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case APP_STARTED_REQUEST:
      return state.merge({ initialized: false, loading: true });

    case APP_STARTED_SUCCESS:
      return state.merge({ initialized: true, loading: false });

    case APP_STARTED_ERROR:
      return state.merge({ initialized: false, loading: false, appError: action.payload.error });

    case CHANGE_LOCALE: {
      const { locale } = action.payload;
      const newDirection = locale === 'ar' ? 'rtl' : 'ltr';
      document.body.dir = newDirection; // Dom manipulation
      return state.merge({
        theme: {
          ...state.theme,
          direction: newDirection,
        },
        locale,
      });
    }

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function appStartedRequest() {
  return { type: APP_STARTED_REQUEST };
}

export function appStartedSuccess() {
  return { type: APP_STARTED_SUCCESS };
}

export function appStartedError(error) {
  return { type: APP_STARTED_ERROR, payload: { error } };
}

export function changeLocale(locale) {
  return { type: CHANGE_LOCALE, payload: { locale } };
}

/* ------------- Thunks ------------- */
export function appStarted() {
  return async dispatch => {
    try {
      dispatch(appStartedRequest());
      return dispatch(appStartedSuccess());
    } catch (error) {
      dispatch(appStartedError(error));
    }
  };
}
