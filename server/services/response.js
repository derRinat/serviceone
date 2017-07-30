
const Response = {

    send(res, data) {
        const { status } = data;
        res.status(status).json(data);
    }
}

module.exports = Response;
