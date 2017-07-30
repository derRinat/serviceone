const Config = require('../config');
const jwt = require('jsonwebtoken');

const JWT = {

    set(data) {
        const { expiresIn } = Config;
        return jwt.sign(data, Config.secret, { expiresIn })
    }
    
}

module.exports = JWT;
