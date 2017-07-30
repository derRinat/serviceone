import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const dummy = (state={}, action) => state;

const rootReducer = combineReducers({
    routing,
    dummy
});

export default rootReducer;
