const { registerUser, verifyotp, loginuser, logoutuser } = require("../controller/user");

const Router =require("express").Router()

Router.post("/signup", registerUser).post("/verify-otp",verifyotp).post("/login",loginuser).put("/logout",logoutuser)

module.exports = Router;  