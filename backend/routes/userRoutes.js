import express from "express"
import { login, register } from "../controllers/AuthController";

const userRoute = express.Router();

userRoute.post("/login", login)
userRoute.post("/register", register)
userRoute.get("/logout")
export default userRoute;