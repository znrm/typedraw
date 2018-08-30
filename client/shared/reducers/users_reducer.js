
import InitialState from '../store/initial_store';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

import { START_SESSION } from '../actions/session_actions';

const UsersReducer = (oldState = InitialState.users, action) => {
  Object.freeze(oldState);
  const newState = {};

  switch (action.type) {
    case START_SESSION:
    case RECEIVE_USER: {
      const userId = action.res.data.id;
      return merge(newState, oldState, { [userId]: action.res.data });
    }
    default:
      return oldState;
  }
};

export default UsersReducer;
