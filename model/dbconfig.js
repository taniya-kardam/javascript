const mysql =require('mysql');
const pool = mysql.createPool({
    ConnectionLimit : 100,
    host : 'localhost',
    user : 'root',
   password : 'root',
   database : 'application ',
});
module.exports = pool;