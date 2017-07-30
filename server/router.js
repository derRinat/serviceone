const AuthController = require('./controllers/auth');
const PartnerController = require('./controllers/partner');
const passport = require('passport');

require('./services/passport');

const authMiddleware = passport.authenticate('jwt', { session: false });

const Router = (app) => {

     app.post('/login', AuthController.login);
     app.post('/signup', AuthController.signUp);
     app.get('/partner', authMiddleware, PartnerController.load);
 }

module.exports = Router;
