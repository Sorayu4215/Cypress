const express = require("express");
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const errorHandlerMiddleware = require('./back-end/middleware/error/errorHandler')
const basicRouter = require('./back-end/routing/basicRouter')
const authorisationRouter = require('./back-end/routing/authorisationRouter')
const getItemsRouter = require('./back-end/routing/getItemsRouter')
const getOrderRouter = require('./back-end/routing/orderRouting')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist', 'testing-app', 'browser')))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(fileUpload());


app.use('/api/v1/', getOrderRouter)
app.use('/api/v1/', getItemsRouter)
app.use('/api/v1/', authorisationRouter)
app.use('', basicRouter)


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

