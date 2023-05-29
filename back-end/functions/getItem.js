
let database = require('../database/mysql')

const getItems = (request,response) => {
    let query = "SELECT * FROM Items"
    database.query(query, (err,data)=>{
        if (data) {
            return response.status(200).json(data)
        } else {
            return response.status(500).json({ msg: 'Something went wrong!' })
        }
    })
}

const getItem = (request, response) => {
    const id = request.params.id
    let query = `SELECT * FROM Items WHERE idItems = '${id}'`
    database.query(query, (err, data) => {
        if (data) {
            return response.status(200).json(data)
        } else {
            return response.status(500).json({ msg: 'Something went wrong!' })
        }
    })
}

module.exports = {getItems, getItem}