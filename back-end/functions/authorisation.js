require('dotenv').config();
const { CustomAPIError } = require('../middleware/error/customError')
const jwt = require('jsonwebtoken');
const fs = require('fs')
const { join } = require('path');

const logIn = async (request, response, next) => {
    let userFound = false
    const { username, password } = request.body
    let id
    if (!username || !password) {
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }

    //get data
    let data = fs.readFileSync(join(process.cwd(), 'data', 'json-data', 'users.json'), 'utf8');

    if(!data){
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }

    const originalData = JSON.parse(data);

    originalData.forEach(element => {
        if (element.username == username && element.password == password) {
            userFound = { username: element.username, email: element.email, id: element.idUsers }
        }
    });


    if (userFound) {
        const token = jwt.sign({ name: username, idUsers: userFound.id }, process.env.JWT_SECRET, { expiresIn: 20 * 60 * 10 });
        return response.status(200).json({ token: token, username: userFound.username, email: userFound.email })
    } else {
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }

}

const user = (request, response, next) => {
    const token = request.headers.authorization.split(' ')[1]
    const user = jwt.decode(token, process.env.JWT_SECRET)
    //get data
    let data = fs.readFileSync(join(process.cwd(), 'data', 'json-data', 'users.json'), 'utf8');

    if (!data) {
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }

    const originalData = JSON.parse(data);

    const signleUser = originalData.filter(element => element.idUsers == user.idUsers)

    //data adjusmtnes
    signleUser[0].newsletter = signleUser[0].newsletter == true;
    signleUser[0].terms_and_condition = signleUser[0].terms_and_condition == true;
    signleUser[0].bussiness_account = signleUser[0].bussiness_account == true;
    delete signleUser[0].username
    delete signleUser[0].password
    // Iterate over each attribute in the 'data' object
    for (const key in signleUser[0]) {
        // Check if the attribute value is the string 'undefined'
        if (signleUser[0][key] === 'undefined') {
            // Transform the attribute value to an empty string ('')
            signleUser[0][key] = '';
        }
    }

    response.status(200).json(signleUser[0])
}

const changeUserData = (request, response) => {
    const { email, name, address, country, city, post_code, phone_number, newsletter, terms_and_condition, bussiness_account, compaty_reg_number, VAT, BIC, IBAN, bank_account_holder } = request.body

    const token = request.headers.authorization.split(' ')[1]
    const user = jwt.decode(token, process.env.JWT_SECRET)


    if (email == null | undefined || name == null | undefined || address == null | undefined || country == null | undefined || city == null | undefined || post_code == null | undefined || phone_number == null | undefined || terms_and_condition == null | undefined) {
        return response.status(400).json({ msg: 'Wrong request!' })
    }
    if (bussiness_account == true || bussiness_account == 'true') {
        if (compaty_reg_number == null | undefined || VAT == null | undefined || BIC == null | undefined || IBAN == null | undefined || bank_account_holder == null | undefined) {
            return response.status(400).json({ msg: 'Wrong request!' })
        }
    }

    //get data
    let data = fs.readFileSync(join(process.cwd(), 'data', 'json-data', 'users.json'), 'utf8');

    if (!data) {
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }

    const originalData = JSON.parse(data);    

    //change data
    const changedUserData = originalData.map(element => {
        if (element.idUsers == user.idUsers) {
            element.email = email
            element.name = name
            element.address= address
            element.city = city
            element.post_code = post_code
            element.country = country
            element.phone_number = phone_number
            element.newsletter = newsletter
            element.terms_and_condition = terms_and_condition
            element.bussiness_account = bussiness_account
            element.compaty_reg_number = compaty_reg_number
            element.BIC = BIC
            element.VAT = VAT
            element.IBAN = IBAN
            element.bank_account_holder = bank_account_holder
            element.password = element.password
            element.username = element.username
            element.idUsers = element.idUsers
        }
        return element
    })

    //write to file
    fs.writeFile(join(process.cwd(), 'data', 'json-data', 'users.json'), JSON.stringify(changedUserData), error => {
        if (error) {
            return response.status(500).json({ msg: 'Something went wrong' });
        }
        // If file write is successful, send the response
        response.status(201).json("User data successfully changed!");
    })
}

const changeUsername = async (request, response) => {
    const { username } = request.body
    let usernameUsed = false

    const token = request.headers.authorization.split(' ')[1]
    const user = jwt.decode(token, process.env.JWT_SECRET)
    if (username == null | undefined) {
        return response.status(400).json({ msg: 'Wrong request!' })
    }

    //get data
    let data = fs.readFileSync(join(process.cwd(), 'data', 'json-data', 'users.json'), 'utf8');
    if (!data) {
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }
    const originalData = JSON.parse(data);

    //verify wheter useraname is already used 
    originalData.forEach(element => {
        if (element.username == username) {
            usernameUsed = true
        }
    });
    if (usernameUsed == true) {
        return response.status(400).json({ msg: 'Username is already used!' })
    }

    //change username
    const changedUserData = originalData.map(element => {
        if (element.idUsers == user.idUsers) {
            // Create a copy of the original element
            const updatedElement = { ...element };
            // Modify the desired property
            updatedElement.username = username;
            // Return the updated element
            return updatedElement;
        }
        return element
    })    

    //write new data into file
    fs.writeFile(join(process.cwd(), 'data', 'json-data', 'users.json'), JSON.stringify(changedUserData), error => {
        if (error) {
            return response.status(500).json({ msg: 'Something went wrong' });
        }
        // If file write is successful, send the response
        response.status(201).json("User data successfully changed!");
    })
}

const changePassword = (request, response) => {
    const { newPassword } = request.body

    const token = request.headers.authorization.split(' ')[1]
    const user = jwt.decode(token, process.env.JWT_SECRET)
    if (newPassword == null | undefined) {
        return response.status(400).json({ msg: 'Wrong request!' })
    }    

    //get data
    let data = fs.readFileSync(join(process.cwd(), 'data', 'json-data', 'users.json'), 'utf8');
    if (!data) {
        return response.status(401).json({ msg: 'Wrong username or password!' })
    }
    const originalData = JSON.parse(data);

    //change password
    const changedUserData = originalData.map(element => {
        if (element.idUsers == user.idUsers) {
            // Create a copy of the original element
            const updatedElement = { ...element };
            // Modify the desired property
            updatedElement.password = newPassword;
            // Return the updated element
            return updatedElement;
        }
        return element
    })

    //write to file
    fs.writeFile(join(process.cwd(), 'data', 'json-data', 'users.json'), JSON.stringify(changedUserData), error => {
        if (error) {
            return response.status(500).json({ msg: 'Something went wrong' });
        }
        // If file write is successful, send the response
        response.status(201).json("User data successfully changed!");
    })

}

const registration = async (request, response) => {
    const { email, name, address, country, city, post_code, phone_number, newsletter, terms_and_condition, bussiness_account, compaty_reg_number, VAT, BIC, IBAN, bank_account_holder, username, password } = request.body

    if (username == null | undefined || password == null | undefined || email == null | undefined || name == null | undefined || address == null | undefined || country == null | undefined || city == null | undefined || post_code == null | undefined || phone_number == null | undefined || terms_and_condition == null | undefined | 'false') {
        return response.status(400).json({ msg: 'Wrong request!' })
    }
    if (bussiness_account == true || bussiness_account == 'true') {
        if (compaty_reg_number == null | undefined || VAT == null | undefined || BIC == null | undefined || IBAN == null | undefined || bank_account_holder == null | undefined) {
            return response.status(400).json({ msg: 'Wrong request!' })
        }
    }

    let usernameUsed = false
    //verify us username is not used
    let originalData = fs.readFileSync(join(process.cwd(), 'data', 'json-data', 'users.json'), 'utf8');
    if (!originalData) {
        originalData = []
    }
    // const originalData = JSON.parse(data);

    originalData.forEach(element => {
        if (element.username == username) {
            usernameUsed = true
        }
    });

    if (usernameUsed == true) {
        return response.status(400).json({ msg: 'Username is already used!' })
    }

    const newData = [...originalData]; // Copy originalData array
    newData.push({
        email: email,
        name: name,
        address: address,
        city: city,
        post_code: post_code,
        country: country,
        phone_number: phone_number,
        newsletter: newsletter,
        terms_and_condition: terms_and_condition,
        bussiness_account: bussiness_account,
        compaty_reg_number: compaty_reg_number,
        BIC: BIC,
        VAT: VAT,
        IBAN: IBAN,
        bank_account_holder: bank_account_holder,
        password: password,
        username: username,
        idUsers: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    });

    fs.writeFile(join(process.cwd(), 'data', 'json-data', 'users.json'), JSON.stringify(newData), error => {
        if (error) {
            return response.status(500).json({ msg: 'Something went wrong' });
        }

        // Find the user in the updated data
        const user = newData.find(element => element.username === username);
        if (user) {
            const token = jwt.sign({ name: user.username, idUsers: user.idUsers }, process.env.JWT_SECRET, { expiresIn: 20 * 60 * 10 });
            return response.status(200).json({ token: token, username: user.username, email: user.email });
        } else {
            return response.status(500).json({ msg: 'User not found' });
        }
    });
}

module.exports = { logIn, user, changeUserData, changeUsername, changePassword, registration };