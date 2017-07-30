
const ResponseService = require('../services/response');
const Statuses = require('../constants/resposneStatuses');

const PartnerController = {

    load(req, res) {

        const response = {
            status: Statuses.SUCCESS,
            data: req.user
        }
        return ResponseService.send(res, response);
    }
}

module.exports = PartnerController;
