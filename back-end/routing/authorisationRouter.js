let express = require("express");
let authorisationRouter = express.Router();

const { logIn, user } = require('../functions/authorisation')
const tokenCheckMiddleware = require('../middleware/tokenCheck/tokenCheck')

authorisationRouter.route('/login').post(logIn) 
authorisationRouter.route('/user').get(tokenCheckMiddleware, user) 


module.exports = authorisationRouter;