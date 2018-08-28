import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const createUser = newUser => dispatch => (
    UserAPIUtil.createUser(newUser)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);