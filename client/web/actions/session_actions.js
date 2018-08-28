import * as SessionAPIUtil from '../util/session_api_util';

export const START_SESSION = 'START_SESSION';
export const END_SESSION = 'END_SESSION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const startSession = res => ({
  type: START_SESSION,
  res
});

const quitSession = res => ({
  type: END_SESSION,
  res
});

export const receiveErrors = errs => ({
  type: RECEIVE_ERRORS,
  errs
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchCurrentSession = () => dispatch =>
  SessionAPIUtil.fetchCurrentSession()
    .then(res => dispatch(startSession(res)), err => console.log(err, 'error'))
    .catch(err => console.log(err));

export const login = user => dispatch =>
  SessionAPIUtil.startSession(user)
    .then(res => dispatch(startSession(res)), err => (
      dispatch(receiveErrors(err.response.data))
    ))
    .catch(err => console.log(err));

export const logout = () => dispatch =>
  SessionAPIUtil.endSession()
    .then(res => dispatch(quitSession(res)))
    .catch(err => console.log(err));

export const removeErrors = () => dispatch => dispatch(clearErrors);
