const path = require('path')

const getPage = (request, response) => {
    response.status(200).sendFile(path.resolve(__dirname, '..', '..', 'dist', 'testing-app', 'browser', 'index.html'))
}


module.exports = { getPage }