import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const configureStore = (history, initialState = {}) => {
    const middlewares = [
        thunk,
        routerMiddleware(history)
    ];

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    syncHistoryWithStore(history, store);

    return store;
};

export default configureStore;
