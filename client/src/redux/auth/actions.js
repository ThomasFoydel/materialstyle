import { types } from './types';

export const login = (user) => ({
  type: types.SET_LOGIN_SESSION,
  payload: user,
});

export const logout = () => ({
  type: types.LOGOUT_SESSION,
});
