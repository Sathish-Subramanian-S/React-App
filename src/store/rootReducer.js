import { combineReducers } from 'redux';

const appReducer = combineReducers({
    // FlipCardReducer 
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;