const mysql = require("mysql")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"restaurent"
})

db.connect((err)=>{
    if(err) throw err
    else{
        console.log("db connected")
    }
})