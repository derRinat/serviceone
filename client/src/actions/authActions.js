import { push } from 'react-router-redux';
import * as AuthActions from '../constants/actions/authActionTypes';
import * as API from "../api/auth";

export const login = data => async dispatch => {

    const action = await dispatch(API.login(data));

    if(AuthActions.LOGIN_SUCCESS === action.type) {
        dispatch(push('/'));
    }
};

export const logout = () => dispatch => {

    dispatch({
        type: AuthActions.LOGOUT
    })

    dispatch(push('/auth'));
};
