import merge from 'lodash.merge';

import {
    RECEIVE_USER
} from '../../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {};

    switch (action.type) {
        case RECEIVE_USER:
            const userId = action.user.id
            return merge(newState, oldState, { [userId]: user });
        default:
            return oldState;
    }
};

export default UsersReducer;