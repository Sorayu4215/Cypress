let express = require("express");
let getItemsRouter = express.Router();

const {getItems, getItem} = require('../functions/getItem')

getItemsRouter.route('/items').get(getItems)
getItemsRouter.route('/items/:id').get(getItem)

module.exports = getItemsRouter;

