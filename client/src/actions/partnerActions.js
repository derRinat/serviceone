
import * as PartnerAction from '../constants/actions/partnerActionTypes';

export const loadPartner = () => dispatch => dispatch({
    type: PartnerAction.LOAD_PARTNER_SUCCESS,
    data: {
        login: "super@partner.com",
        name: "Super Partner",
        city: "Cologne",
        password: 822822
    }
});
