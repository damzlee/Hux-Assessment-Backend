const mysql= require("mysql");


const pool = mysql.createPool({
    port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    connectionLimit:20
});

module.exports=pool;