const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./router');
const config = require('./config')

/** Create app **/
const app = express();

/** Setup db **/
require('./models').connect(config.connection);

/** App setup **/
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

/** Start server **/
const port = process.env.PORT || config.port;

http.createServer(app).listen(port, () => {
    console.log('Server listening on:', port);
});
