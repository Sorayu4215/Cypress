let express = require("express");
let authorisationRouter = express.Router();

const { logIn, user, changeUserData, changeUsername, changePassword, registration } = require('../functions/authorisation')
const tokenCheckMiddleware = require('../middleware/tokenCheck/tokenCheck')

authorisationRouter.route('/login').post(logIn) 
authorisationRouter.route('/user').get(tokenCheckMiddleware, user) 
authorisationRouter.route('/change-user-data').post(tokenCheckMiddleware, changeUserData) 
authorisationRouter.route('/change-username').post(tokenCheckMiddleware, changeUsername) 
authorisationRouter.route('/change-password').post(tokenCheckMiddleware, changePassword) 
authorisationRouter.route('/registration').post(registration) 


module.exports = authorisationRouter;