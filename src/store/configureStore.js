import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";

export default function congfigureStore() {
    return createStore(rootReducer, composeWithDevTools());
}