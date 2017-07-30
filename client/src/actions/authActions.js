import { push } from 'react-router-redux';
import * as AuthAction from '../constants/actions/authActionTypes';

export const login = data => dispatch => {

    dispatch({
        type: AuthAction.LOGIN_SUCCESS
    })

    dispatch(push('/'));
};

export const logout = data => dispatch => {
    
    dispatch({
        type: AuthAction.LOGOUT
    })

    dispatch(push('/auth'));
};
