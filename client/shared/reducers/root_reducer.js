import { combineReducers } from 'redux';
import user from './users_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import documents from './document_reducer';

export default combineReducers({
  user,
  documents,
  session,
  errors
});
