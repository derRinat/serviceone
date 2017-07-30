
const mongoose = require('mongoose');

const Connect = (connection) => {

    mongoose.connect(connection, {useMongoClient: true});
    mongoose.Promise = global.Promise;

    mongoose.connection.on('error', (err) => {
        console.error(`Database connection error: ${err}`);
        process.exit(1);
    });

    /** Inject models **/
    require('./partner');
}

module.exports.connect = Connect;
