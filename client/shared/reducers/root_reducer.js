import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import documents from './document_reducer';
import user from './users_reducer';

export default combineReducers({
  user,
  documents,
  session,
  errors
});
