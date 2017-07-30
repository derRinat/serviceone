import * as PartnerActions from '../constants/actions/partnerActionTypes';
import * as Methods from '../constants/methods';
import { API_PARTNER } from '../config/api';
import { API_CALL } from '../config/common';

export const load = () => ({
    [API_CALL]: {
        method: Methods.GET,
        endpoint: API_PARTNER,
        types: [
            PartnerActions.LOAD_PARTNER_REQUEST,
            PartnerActions.LOAD_PARTNER_SUCCESS,
            PartnerActions.LOAD_PARTNER_FAILURE
        ]
    }
});
