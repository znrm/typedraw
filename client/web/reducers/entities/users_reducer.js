import merge from 'lodash.merge';

import {
    RECEIVE_USER
} from '../../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {};

    switch (action.type) {
        case RECEIVE_USER:
            const userId = action.user.data._id
            return merge(newState, oldState, { [userId]: action.user.data });
        default:
            return oldState;
    }
};

export default UsersReducer;