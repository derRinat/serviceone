
const PartnerModel = require('../models/partner');
const ResponseService = require('../services/response');
const Statuses = require('../constants/resposneStatuses');
const JWT = require('../services/jwt');

const AuthController = {

    /** Sign up action **/

    signUp(req, res) {

        const { name, email, password, city } = req.body;
        const response = {};

        if(!(name && email && password && city)) {
            response.status = Statuses.BAD_PARAMS;
            response.error = "Bad params";
            return ResponseService.send(res, response);
        }

        const partner = new PartnerModel({
            name,
            password,
            email,
            city
        });

        partner.save()
            .then(created => {
                response.status = Statuses.SUCCESS;
                return ResponseService.send(res, response);
            })
            .catch(err => {
                response.status = Statuses.SERVER_ERROR;
                response.error = err;
                return ResponseService.send(res, response);
            })
    },

    /** Login action **/
    login(req, res) {

        const { email, password } = req.body;

        const response = {
            status: Statuses.SUCCESS
        };

        if(!(email && password)) {
            response.status = Statuses.BAD_PARAMS;
            response.error = 'Bad params';

            return ResponseService.send(res, response);
        }
 
        PartnerModel.findOne({ email })
            .then(partner => {

                if(!partner) {
                    response.status = Statuses.NOT_FOUND;
                    response.error = 'Partner not found';

                    return ResponseService.send(res, response);
                }

                partner.comparePassword(password, (err, result) => {

                    if(!result) {

                        response.status = Statuses.BAD_AUTH;
                        response.error = 'Incorrect password';

                        return ResponseService.send(res, response);
                    }

                    const partner_id = partner.id;
                    const token = JWT.set({partner_id});

                    response.data = { token };
                    return ResponseService.send(res, response);
                })
            })
            .catch(err => {
                response.status = Statuses.SERVER_ERROR;
                response.error = err;

                return ResponseService.send(res, response);
            })
    }
}

module.exports = AuthController;
