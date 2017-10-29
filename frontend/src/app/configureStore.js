import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";

import rootReducer from "./rootReducer";

const loggerMiddleware = createLogger({
    collapsed: true,
    stateTransformer: (state) => state && state.toJS()
});

export const sagaMiddleware = createSagaMiddleware();


export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            sagaMiddleware,
            loggerMiddleware
        )
    );
};
