import { types } from './types.js';

const INITIAL_STATE = {
  userId: null,
  token: null,
  isLoggedIn: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        userId: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
