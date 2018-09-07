import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './errors_actions';
import { receiveUser } from './user_actions';

export const START_SESSION = 'START_SESSION';
export const END_SESSION = 'END_SESSION';

export const startSession = (res, token) => ({
  type: START_SESSION,
  res,
  token
});

const quitSession = res => ({
  type: END_SESSION,
  res
});

export const fetchCurrentSession = token => dispatch =>
  SessionAPIUtil.fetchCurrentSession(token).then(
    res => dispatch(startSession(res, token)),
    err => dispatch(receiveErrors(Object.values(err.response.data)))
  );

export const login = user => dispatch =>
  SessionAPIUtil.startSession(user).then(
    res => {
      dispatch(receiveUser(res));
      dispatch(startSession(res));
    },
    err => dispatch(receiveErrors(Object.values(err.response.data)))
  );

export const logout = () => dispatch =>
  SessionAPIUtil.endSession()
    .then(res => dispatch(quitSession(res)))
    .catch(err => console.log(err));
