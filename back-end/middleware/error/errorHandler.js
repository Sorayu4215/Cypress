const {CustomAPIError} = require('./customError')
const errorHandlerMiddleware = (err, request, response, next) =>{
    if(err instanceof CustomAPIError){
        return response.status(err.statusCode).json({ msg:err.message })
    }
    return response.status(500).json({ msg:'Something went wrong!'})
}

module.exports = errorHandlerMiddleware;