import { combineReducers } from 'redux';

import entities from './entities/entities_reducer';
import session from './session/session_reducer';
import errors from './error/errors_reducer';

export default combineReducers({
  entities,
  session,
  errors
});
