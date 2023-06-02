const { log } = require('console')
let database = require('../database/mysql')

const createPost = (request, response) =>{
    const { id, item, address, shipping} = request.body

    console.log(id)
    console.log(item)
    console.log(address)
    console.log(shipping)

    if (id == null | undefined || item == null | undefined || address == null | undefined || shipping == null| undefined){
        return response.status(400).json({ msg: 'Wrong request!' })
    }
    //token add
    // const token ID 
    const userID  = undefined

    
    let query = `INSERT INTO Orders (orderId, item, address,shipping, userID) VALUES ('${id}','${JSON.stringify(item)}','${JSON.stringify(address)}','${JSON.stringify(shipping)}','${userID}');`

    database.query(query, (err, data) => {
        if (data) {
            return response.status(201).json(data)
        } else {
            return response.status(500).json({ msg: 'Something went wrong' })
        }
    })
}

module.exports = { createPost }