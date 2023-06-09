const mysql = require('mysql')

let connection;

if (process.env.NODE_ENV == 'production'){
    connection = mysql.createConnection({
        host: 'c8u4r7fp8i8qaniw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
        database: 'jn58grsf3pg8ipjh',
        user: 'nmbo9azzsx5iwasg',
        password: 'k6wok7dtn3w0f3kp'
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