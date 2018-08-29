import { combineReducers } from 'redux';
import users from './entities/users_reducer';
import session from './session/session_reducer';
import errors from './error/errors_reducer';

export default combineReducers({
  session,
  users,
  errors
});
