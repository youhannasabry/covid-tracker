import get from 'lodash/get';

export const userSelector = state => get(state, 'auth.user', null);