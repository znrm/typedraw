export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errs => ({
  type: RECEIVE_ERRORS,
  errs
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const removeErrors = () => dispatch => dispatch(clearErrors);
