import { SHOW_ALERT, CLOSE_ALERT } from '../constants/actions/alertActionTypes';
import { ALERT_TIMEOUT } from '../config/common';


export const success = alert => dispatch => {
    alert.type = 'success';
    showAlert(alert)(dispatch);
};

export const error = alert => dispatch => {
    alert.type = 'error';
    showAlert(alert)(dispatch);
};

export const showAlert = alert => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        alert
    });

    setTimeout(() => {
        closeAlert(alert)(dispatch);
    }, alert.timeout || ALERT_TIMEOUT);
};

export const closeAlert = alert => dispatch => {
    dispatch({
        type: CLOSE_ALERT,
        alert
    });
};
