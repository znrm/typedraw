import { combineReducers } from 'redux'; 

import entities from './entities/entities_reducer';
import session from './session/session_reducer';

export default combineReducers({
    entities,
    session,
});