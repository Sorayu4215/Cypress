require('dotenv').config();
const { CustomAPIError } = require('../middleware/error/customError')
let database = require('../database/mysql')
const jwt = require('jsonwebtoken');
const { request } = require('http');
const { query } = require('express');
const { use } = require('../routing/authorisationRouter');

const logIn = async (request, response,next) => {
    let userFound = false
    const { username, password } = request.body
    let id 
    if (!username || !password){
       return  response.status(401).json({msg: 'Wrong username or password!'})
    }

    let query = "SELECT * FROM users"

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
    const token = request.headers.authorization.split(' ')[1]
    const user = jwt.decode(token, process.env.JWT_SECRET)
    
    let query = `SELECT * FROM users WHERE idUsers = '${user.idUsers}'`
    database.query(query, (err, data) => {
        if (data.length > 0) {
            data[0].newsletter = data[0].newsletter === 'true';
            data[0].terms_and_condition = data[0].terms_and_condition === 'true';
            data[0].bussiness_account = data[0].bussiness_account === 'true';
            data[0]
            delete data[0].username
            delete data[0].password  
            // Iterate over each attribute in the 'data' object
            for (const key in data[0]) {
                // Check if the attribute value is the string 'undefined'
                if (data[0][key] === 'undefined') {
                    // Transform the attribute value to an empty string ('')
                    data[0][key] = '';
                } 
            }
            response.status(200).json(data[0])
        } else {
            return response.status(500).json({ msg: 'Something went wrong' })
        }
    })
}

const changeUserData = (request,response)=>{
    const { email, name, address, country, city, post_code, phone_number, newsletter, terms_and_condition, bussiness_account, compaty_reg_number, VAT, BIC, IBAN, bank_account_holder } =request.body

    const token = request.headers.authorization.split(' ')[1]
    const user = jwt.decode(token, process.env.JWT_SECRET)


    if (email == null | undefined || name == null | undefined || address == null | undefined || country == null | undefined || city == null | undefined || post_code == null | undefined || phone_number == null | undefined || terms_and_condition == null | undefined) {
        return response.status(400).json({ msg: 'Wrong request!' })
    }
    if (bussiness_account == true || bussiness_account == 'true'){
        if (compaty_reg_number == null | undefined || VAT == null | undefined || BIC == null | undefined || IBAN == null | undefined || bank_account_holder == null | undefined) {
            return response.status(400).json({ msg: 'Wrong request!' })
        }
    }

    const query = `UPDATE users SET email = '${email}', name = '${name}', address = '${address}', city = '${city}', post_code = '${post_code}', phone_number = '${phone_number}', country = '${country}', newsletter = '${newsletter}', bussiness_account = '${bussiness_account}', compaty_reg_number = '${compaty_reg_number}', BIC = '${BIC}', VAT = '${VAT}', IBAN = '${IBAN}' , bank_account_holder = '${bank_account_holder}' WHERE idUsers = '${user.idUsers}'`

    database.query(query, (err, data) => {
        if (data) {
            return response.status(200).json(data)
        } else {
            return response.status(500).json({ msg: 'Something went wrong!' })
        }
    })

}

 const changeUsername = async (request,response) =>{
     const { username } = request.body
     let usernameUsed = false    

     const token = request.headers.authorization.split(' ')[1]
     const user = jwt.decode(token, process.env.JWT_SECRET)
     if (username == null | undefined ) {
         return response.status(400).json({ msg: 'Wrong request!' })
     }

    //  check if username is not already used
     let query = `SELECT * FROM users`

     await new Promise((resolve, reject) => {
         database.query(query, (err, data) => {
             if (data) {
                 data.forEach(element => {
                     if (element.username == username) {
                         usernameUsed = true
                     }
                 });
                 resolve(usernameUsed)
             } else {
                 return response.status(500).json({ msg: 'Something went wrong' })
             }
         })
     })
     if (usernameUsed == true) {
         return response.status(400).json({ msg: 'Username is already used!' })
     }

     const queryChange = `UPDATE users SET username = '${username}' WHERE idUsers = '${user.idUsers}'`

     database.query(queryChange, (err, data) => {
         if (data) {
             return response.status(200).json(data)
         } else {
             return response.status(500).json({ msg: 'Something went wrong!' })
         }
     })

 }
 const changePassword = (request,response) =>{
     const { newPassword } = request.body

     const token = request.headers.authorization.split(' ')[1]
     const user = jwt.decode(token, process.env.JWT_SECRET)
     if (newPassword == null | undefined) {
         return response.status(400).json({ msg: 'Wrong request!' })
     }

     const query = `UPDATE users SET password = '${newPassword}' WHERE idUsers = '${user.idUsers}'`

     database.query(query, (err, data) => {
         if (data) {
             return response.status(200).json(data)
         } else {
             return response.status(500).json({ msg: 'Something went wrong!' })
         }
     })
 }

const registration = async (request, response) =>{
    const { email, name, address, country, city, post_code, phone_number, newsletter, terms_and_condition, bussiness_account, compaty_reg_number, VAT, BIC, IBAN, bank_account_holder, username, password } = request.body

     if (username == null | undefined || password == null | undefined || email == null | undefined || name == null | undefined || address == null | undefined || country == null | undefined || city == null | undefined || post_code == null | undefined || phone_number == null | undefined || terms_and_condition == null | undefined | 'false') {
        return response.status(400).json({ msg: 'Wrong request!' })
     }
     if (bussiness_account == true || bussiness_account == 'true') {
         if (compaty_reg_number == null | undefined || VAT == null | undefined || BIC == null | undefined || IBAN == null | undefined || bank_account_holder == null | undefined) {
            return response.status(400).json({ msg: 'Wrong request!' })
         }
     }

let used = false
     //verify us username is not used
    let queryUsedUser = "SELECT * FROM users"

     await new Promise((resolve, reject) => {
         return database.query(queryUsedUser, (err, data) => {
             if (data) {
                 data.forEach(element => {
                     if (element.username == username) {
                        used = true
                     }
                    resolve('')
                 });
             } else {
                 return response.status(500).json({ msg: 'Something went wrong' })
             }
         })
     })

    if(used){
         return response.status(400).json({ msg: 'Username already used' })
     }

     //crate user
    const query = `INSERT INTO users (username, password, email, name, address, city , post_code, phone_number, country, newsletter , terms_and_condition, bussiness_account , compaty_reg_number, BIC, VAT, IBAN, bank_account_holder) VALUES ('${username}','${password}','${email}', '${name}','${address}','${city}','${post_code}','${phone_number}','${country}','${newsletter}','${terms_and_condition}','${bussiness_account}','${compaty_reg_number}','${BIC}','${VAT}','${IBAN}' ,'${bank_account_holder}')`
     await new Promise((resolve, reject) => {
     database.query(query, (err, data) => {
         if (data) {
             resolve('')
         } else {
             return response.status(500).json({ msg: 'Something went wrong!' })
         }
     })
     })

     //get newly created user and create teoken
     database.query(queryUsedUser, (err, data) => {
         if (data) {
             data.forEach(element => {
                 if (element.username == username) {
                     const token = jwt.sign({ name: element.username, idUsers: element.idUsers }, process.env.JWT_SECRET, { expiresIn: 20 * 60 * 10 });
                     return response.status(200).json({ token: token, username: element.username, email: element.email })
                 }
             });
         } else {
             return response.status(500).json({ msg: 'Something went wrong' })
         }
     })

 }

module.exports = { logIn, user, changeUserData, changeUsername, changePassword, registration };