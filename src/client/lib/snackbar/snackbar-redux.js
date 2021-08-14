/* ------------- Actions ------------- */
const ENQUEUE_SNACKBAR = 'covidTracker/SnackBar/ENQUEUE_SNACKBAR';
const REMOVE_SNACKBAR = 'covidTracker/SnackBar/REMOVE_SNACKBAR';

/* ------------- initial state ------------- */

const defaultState = {
  notifications: [],
};

/* ------------- Reducer ------------- */

export default (state = defaultState, action) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification,
          },
        ],
      };

    case REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.key !== action.key),
      };

    default:
      return state;
  }
};

/* ------------- Action Creators ------------- */
export const enqueueSnackbar = notification => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification,
  },
});

export const removeSnackbar = key => ({
  type: REMOVE_SNACKBAR,
  key,
});

export const successSnackBarAction = message => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    message: message || 'Success!',
    options: {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
    },
  },
});

export const warningSnackBarAction = message => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    message: message || 'Warning!',
    options: {
      variant: 'warning',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
    },
  },
});

export const errorSnackBarAction = error => {
  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      key: new Date().getTime() + Math.random(),
      message: error
        ? `${error.message} - ${error.statusCode || error.status} - ${error.details ||
            error.validations}`
        : 'Error!',
      options: {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 6000,
      },
    },
  };
};
