import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import logger from "redux-logger";
import contactoReducer from "./reducers.js";
const middlewares = [thunk,logger];



export default function configureStore(initialState) {
    const store = createStore(contactoReducer, initialState,
        applyMiddleware(...middlewares));
    return store;
}