let express = require("express");
let getOrderRouter = express.Router();

const { createPost } = require('../functions/order')

getOrderRouter.route('/order').post(createPost)


module.exports = getOrderRouter;
