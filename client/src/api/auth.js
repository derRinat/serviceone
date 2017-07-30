import * as AuthActions from '../constants/actions/authActionTypes';
import * as Methods from '../constants/methods';
import { API_LOGIN } from '../config/api';
import { API_CALL } from '../config/common';

export const login = data => ({
    [API_CALL]: {
        method: Methods.POST,
        endpoint: API_LOGIN,
        body: data,
        types: [
            AuthActions.LOGIN_REQUEST,
            AuthActions.LOGIN_SUCCESS,
            AuthActions.LOGIN_FAILURE
        ]
    }
});
