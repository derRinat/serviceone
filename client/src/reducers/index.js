import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import auth from './auth';
import partner from './partner';
import alerts from './alerts';

const rootReducer = combineReducers({
    routing,
    auth,
    partner,
    alerts
});

export default rootReducer;
