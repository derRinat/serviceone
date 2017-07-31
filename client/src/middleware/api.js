import fetch from 'isomorphic-fetch';

import { API_CALL, AUTH_KEY } from "../config/common";
import { API_ROOT } from "../config/api";
import Storage from "../utils/storage";
import { logout } from "../actions/authActions";

/** Execute request **/

const execRequest = async (method, endpoint, body = null) => {
    const config = setHeaders({ method });

    if (null !== body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(API_ROOT + endpoint, config);
    const json = await response.json();

    return response.ok
        ? json.data
        : Promise.reject(json);
};

/** Set the default request headers **/
const setHeaders = config => {
    const token = Storage.get(AUTH_KEY) || null;

    config.headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        config.headers['Authorization'] = token;
    }

    return config;
};

/** Middleware function **/
const apiMiddleware = store => next => async action => {

    /** Simple action, just forward **/
    if (!action.hasOwnProperty(API_CALL)) {
        return next(action)
    }

    /** API call  **/
    const apiCall = action[API_CALL];

    const { method, endpoint, types, body } = apiCall;
    const [ requestType, successType, errorType ] = types;

    /** Request action **/
    next({
        type: requestType
    });

    return execRequest(method, endpoint, body)
        .then(
            data =>
                next({
                    type: successType,
                    data
                }),

            data => {
                const { dispatch } = store;

                // Non-authorized request, just logout
                if (data.meta && data.meta.code == 401) {
                    dispatch(logout());
                    return false;
                }

                return next({
                    type: errorType,
                    error: data.error || data
                });
            }
        );
};


export default apiMiddleware;
