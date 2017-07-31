import * as AuthActions from "../constants/actions/authActionTypes";
import Storage from "../utils/storage";
import { AUTH_KEY } from "../config/common";

const auth = (state = { authenticated: !!Storage.get(AUTH_KEY) }, action) => {

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
            const { token } = action.data;
            Storage.set(AUTH_KEY, token);
            return {
                authenticated: true
            };

        case AuthActions.LOGOUT:
            Storage.remove(AUTH_KEY);
            return {
                authenticated: false
            };

        default:
            return state;
    }
}

export default auth;
