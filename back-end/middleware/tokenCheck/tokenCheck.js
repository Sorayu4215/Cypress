const jwt = require('jsonwebtoken');

const tokenCheckMiddleware = function (request, response, next) { 

    if (request.headers.authorization == null || !request.headers.authorization.startsWith('Bearer ')) {
        return response.status(403).json({msg:'Not authorized!'})
    }

    const token = request.headers.authorization.split(' ')[1]

    try {
         jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return response.status(403).json({ msg: 'Not authorized!' })
    }
    next()
}

module.exports = tokenCheckMiddleware