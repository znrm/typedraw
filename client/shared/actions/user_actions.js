import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = res => ({
  type: RECEIVE_USER,
  res
});

// This is repeated here to prevent dependency cycle
// Current login pattern might need rethinking
const START_SESSION = 'START_SESSION';
const startSession = (res, token) => ({
  type: START_SESSION,
  res,
  token
});

export const createUser = newUser => dispatch =>
  UserAPIUtil.createUser(newUser).then(
    res => {
      dispatch(receiveUser(res));
      dispatch(startSession(res));
    },
    err => dispatch(receiveErrors(Object.values(err.response.data)))
  );
