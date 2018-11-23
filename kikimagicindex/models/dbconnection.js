const mysql = require('mysql');
const moment = require('moment');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kikimagicdatabase'
});

db.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to MySQL.');
    }
});

module.exports = db;