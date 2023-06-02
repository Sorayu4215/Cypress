require('dotenv').config();
const { CustomAPIError } = require('../middleware/error/customError')
let database = require('../database/mysql')
const jwt = require('jsonwebtoken');
const { log } = require('console');

const logIn = async (request, response,next) => {
    let userFound = false
    const { username, password } = request.body
    let id 
    if (!username || !password){
       return  response.status(401).json({msg: 'Wrong username or password!'})
    }

    let query = "SELECT * FROM Users"

    await new Promise((resolve,reject)=>{
        database.query(query, (err, data) => {
            if (data) {
                data.forEach(element => {
                    if(element.username == username && element.password == password){
                        userFound = { username: element.username, email: element.email , id: element.idUsers}
                    } 
                }); 
                resolve(userFound)
            } else {
                return response.status(500).json({ msg: 'Something went wrong' })
            }
        })
    })
    if (userFound) {
        const token = jwt.sign({ name: username, idUsers: userFound.id }, process.env.JWT_SECRET, { expiresIn: 20*60*10 });
        return response.status(200).json({ token: token, username: userFound.username, email: userFound.email })
    } else {
        return response.status(401).json({ msg: 'Wrong username or password!'})
    }

}

const user =  (request, response, next) => {
    console.log('test')
    const token = request.headers.authorization.split(' ')[1]
    console.log(request.headers)
    const user = jwt.decode(token, process.env.JWT_SECRET)

    let query = `SELECT * FROM Users WHERE idUsers = '${user.idUsers}'`
    database.query(query, (err, data) => {
        if (data) {
            response.status(200).json(data)
        } else {
            return response.status(500).json({ msg: 'Something went wrong' })
        }
    })
}

module.exports = { logIn, user };