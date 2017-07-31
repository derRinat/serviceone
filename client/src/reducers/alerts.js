import * as AlertActions from "../constants/actions/alertActionTypes";

 const alerts = (state = [], action) => {

    switch(action.type) {

        case AlertActions.SHOW_ALERT:
            return [
                ...state,
                action.alert
            ];

        case AlertActions.CLOSE_ALERT:
            const index = state.indexOf(action.alert);

            return (index > -1)
                ? state.slice(0, index)
                    .concat(state.slice(index + 1))
                : state;

        default:
            return state;
    }
};

export default alerts;
