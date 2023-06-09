const { log } = require('console');
let database = require('../database/mysql')
const jwt = require('jsonwebtoken');

const createPost = (request, response) =>{
    const { id, item, address, shipping, date} = request.body

    let userID = undefined
    if (request.headers.authorization){
        const token = request.headers.authorization.split(' ')[1]
        if (token !== 'undefined'){
            const user = jwt.decode(token, process.env.JWT_SECRET)
            userID = user.idUsers
        }
    }

    if (id == null | undefined || item == null | undefined || address == null | undefined || shipping == null | undefined || date == null | undefined){
        return response.status(400).json({ msg: 'Wrong request!' })
    }

    let query = `INSERT INTO Orders (orderId, item, address,shipping, userID, date) VALUES ('${id}','${JSON.stringify(item)}','${JSON.stringify(address)}','${JSON.stringify(shipping)}','${JSON.stringify(userID)}', '${JSON.stringify(date)}');`
  
    database.query(query, (err, data) => {
        if (data) {
            return response.status(201).json(data)
        } else {
            return response.status(400).json({ msg: 'Something went wrong' })
        }
    })
}

const getOrders = async(request, response) =>{
    const token = request.headers.authorization.split(' ')[1]
    let userID = null
    let orders
    if (token !== 'undefined') {
        const user = jwt.decode(token, process.env.JWT_SECRET)
        userID = user.idUsers
    }
    
    //get your orders accordgin userID
    let queryOrders = `SELECT * FROM Orders WHERE userID = '${userID}'`
    await new Promise((resolve, reject) => {
        database.query(queryOrders, (err, data) => {
            if (data) {
                orders = data
                resolve(orders)
            } else {
                reject(response.status(500).json({ msg: 'Something went wrong' }))
            }
        })
    })
//get all items
    let queryItems = `SELECT * FROM Items`
    database.query(queryItems, (err, data) => {
        if (data) {
            //get all orders for user
            const items = orders.map(element =>{
                const item = JSON.parse(element.item)              
                //replace original item with new  
                element.item = createArrayWithMatchingIDs(item, data)
                return element
            })
            return response.status(200).json(items)
            // log(data)
        } else {
            return response.status(500).json({ msg: 'Something went wrong!' })
        }
    })
}

function createArrayWithMatchingIDs(elements, orders) {
    // Map elements array to an object for easier lookup
    const elementsMap = elements.reduce((map, element) => {
        map[element.idItems] = element;
        return map;
    }, {});

    // Iterate over orders and retrieve matching elements
    const result = orders.map(order => {
        const element = elementsMap[order.idItems];
        if (element) {
            return { ...element, ...order };
        }
        return null;
    }).filter(Boolean); // Remove null values if any

    return result;
}

module.exports = { createPost, getOrders }