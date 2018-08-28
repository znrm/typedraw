import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../../actions/errors_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errs;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
