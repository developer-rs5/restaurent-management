import mysql from "mysql";

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

module.exports=db