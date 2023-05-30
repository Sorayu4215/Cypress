let express = require("express");
let getOrderRouter = express.Router();

// const { getItems, getItem } = require('../functions/getItem')

getOrderRouter.route('/order').get(getItems)
// getItemsRouter.route('/items/:id').get(getItem)

module.exports = getOrderRouter;
