import * as UserAPIUtil from '../util/user_api_util';
import { startSession, receiveErrors } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = res => ({
  type: RECEIVE_USER,
  res
});

export const createUser = newUser => dispatch =>
  UserAPIUtil.createUser(newUser)
    .then(
      res => dispatch(startSession(res)),
      err => dispatch(receiveErrors(err.response.data))
    )
    .catch(err => console.log(err));
