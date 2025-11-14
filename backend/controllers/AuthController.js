import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export function login(req,res){
    let data = req.body;
    if(!data.password || !data.email){
        return res.json({
            success:false,
            message:"email and password are required"
        })
    }
    const hash = bcrypt.hashSync(password,10)
    uuu

}

export function register(req,res){
    let data = req.body;
    if(!data.password || !data.email || !data.name){
        return res.json({
            success:false,
            message:"email , password and name are required"
        })
    }
}

export function logout(req,res){
    
}