import * as PartnerActions from "../constants/actions/partnerActionTypes";
 
const partner = (state = {}, action) => {

    switch(action.type) {
        case PartnerActions.LOAD_PARTNER_SUCCESS:
            return action.data;
        default:
            return state;
    }
}

export default partner;
