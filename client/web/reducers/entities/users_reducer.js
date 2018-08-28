import merge from 'lodash.merge';

import {
    RECEIVE_USER
} from '../../actions/user_actions';

import {
    START_SESSION
} from '../../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {};

    switch (action.type) {
        case START_SESSION:
        case RECEIVE_USER:
            const userId = action.res.data._id
            return merge(newState, oldState, { [userId]: action.res.data });
        default:
            return oldState;
    }
};

export default UsersReducer;