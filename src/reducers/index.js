import {LAUNCH_ACTION_TYPES} from '../actions/launches';

const defaultState = {
    launches: null
};

export const reducer = (state = defaultState, action) => {
    const appState = {...state};

    switch(action.type) {
        case LAUNCH_ACTION_TYPES.GET_NEXT_FIVE_LAUNCHES:
            console.log('action.data', action.data);
           appState.launches = action.data;
            break;
        default: break;
    }

    return appState;
};

export default reducer;