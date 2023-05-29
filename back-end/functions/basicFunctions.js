const path = require('path')

const getPage = (request, response) => {
    response.status(200).sendFile(path.resolve(__dirname, '..', '..', 'dist', 'gym-application-done', 'browser', 'index.html'))
}


module.exports = { getPage }