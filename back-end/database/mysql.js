const mysql = require('mysql')

let connection;

if (process.env.NODE_ENV == 'production'){
    connection = mysql.createConnection({
        host: '',
        database: '',
        user: '',
        password: ''
    })
} else if ((process.env.NODE_ENV == 'development'))
    connection = mysql.createConnection({
    host: 'localhost',
    database: 'test-app-dev',
    user: 'devuser',
    password: '12345678'
});

connection.connect(function(error){
    console.log(process.env.NODE_ENV);
    if(error){
        throw error;
    }
    else{
        console.log('Connected to database');
    }

})

module.exports = connection;