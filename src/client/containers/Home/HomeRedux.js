import Immutable from 'seamless-immutable';

/* ------------- Actions ------------- */

/* ------------- initial state ------------- */
const initialState = Immutable({
  loading: false,
  error: false,
});

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */


/* ------------- Thunks ------------- */
