import * as AuthActions from "../constants/actions/authActionTypes";


const auth = (state = { authenticated: false }, action) => {

    switch(action.type) {

        case AuthActions.LOGIN_REQUEST:
            return {
                authenticated: false
            };

        case AuthActions.LOGIN_FAILURE:
            return {
                authenticated: false,
            };

        case AuthActions.LOGIN_SUCCESS:
            return {
                authenticated: true
            };

        case AuthActions.LOGOUT:
            return {
                authenticated: false
            };

        default:
            return state;
    }
}

export default auth;
