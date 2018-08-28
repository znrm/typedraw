import merge from 'lodash.merge';

import {
    START_SESSION,
    END_SESSION
} from '../../actions/session_actions';

const _nullUser = {
    currentUser: null,
    loggedIn: false
};

const SessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let newState = {};

    switch (action.type) {
        case START_SESSION:
            const userId = action.res.data._id
            return merge(newState, oldState, { currentUser: userId, loggedIn: true });
        case END_SESSION:
            return merge(newState, oldState, _nullUser);
        default:
            return oldState;
    }
};

export default SessionReducer;