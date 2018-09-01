import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import documents from './documents_reducer';
import ui from './ui_reducer';
import users from './users_reducer';

export default combineReducers({
  users,
  documents,
  session,
  errors,
  ui
});
