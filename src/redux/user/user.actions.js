import { UserActionTypes } from './user.actionTypes';

export const setCurrentUser = payload => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload
});
