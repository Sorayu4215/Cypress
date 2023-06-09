let express = require("express");
let getOrderRouter = express.Router();

const { createPost, getOrders } = require('../functions/order')
const tokenCheckMiddleware = require('../middleware/tokenCheck/tokenCheck')

getOrderRouter.route('/order').post(createPost)
getOrderRouter.route('/order').get(tokenCheckMiddleware, getOrders)


module.exports = getOrderRouter;
