import { push } from 'react-router-redux';
import * as AuthActions from '../constants/actions/authActionTypes';
import * as API from "../api/auth";
import { error } from './alertActions';

import Locale from '../utils/locale';

export const login = data => async dispatch => {

    const action = await dispatch(API.login(data));

    if(AuthActions.LOGIN_SUCCESS === action.type) {
        dispatch(push('/'));
    }

    if(AuthActions.LOGIN_FAILURE === action.type) {
        error({
            title: Locale.trans('ERROR_TITLE'),
            message: Locale.trans('ERROR_MESSAGE')
        })(dispatch);
    }
};

export const signup = data => async dispatch => {
    const action  = await dispatch(API.signup(data));

    if(AuthActions.SIGNUP_SUCCESS == action.type) {
        dispatch(push('/'));
    }

    if(AuthActions.SIGNUP_FAILURE === action.type) {
        error({
            title: Locale.trans('ERROR_TITLE'),
            message: Locale.trans('ERROR_MESSAGE')
        })(dispatch);
    }
}

export const logout = () => dispatch => {

    dispatch({
        type: AuthActions.LOGOUT
    })

    dispatch(push('/auth'));
};
