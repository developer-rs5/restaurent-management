import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import db from "./config/db.js"

const app = express();


app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{

})

app.listen(3000, ()=>{
    console.log("server is running")
})

