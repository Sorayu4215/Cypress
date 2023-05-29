let express = require("express");
let basicRouter = express.Router();

const {  getPage } = require('../functions/basicFunctions')

basicRouter.route('/').get(getPage)
basicRouter.route('/Prihlasenie').get(getPage)
basicRouter.route('*').get(getPage)


module.exports= basicRouter;