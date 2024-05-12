const express = require("express")
const cors=require ("cors")
const app=express()
const port = 2000;
const connectDb = require("./db/database")
const cookieParser = require("cookie-parser")
const bodyParser=require ("body-parser");
const Router = require("./routes/user");
const prodRouter = require("./routes/product");

connectDb();
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],  //yaha 5173 port ko access h // so if we open 2 vite projects and if this would be on 5174 then error will occur CORS
    credentials: true,
}
))
app.use(cookieParser()); //The cookie-parser middleware in Node.js is used to parse cookies attached to the client request object. It can be used to access and set cookies in Express applications.
//app.use(bodyParser().json) //The req.body property is undefined in Express.js when you forget to set the body-parser middleware before you register your route handler function.
app.use(express.json()) //replacement for bodyparser
app.use("/api", Router)
app.use("/api", prodRouter)

app.listen(port,()=> console.log("sevrer is running "));
//When you call app.use(), you’re telling Express to use a piece of middleware. Middleware is a function that Express passes requests through before sending them to your routing functions, such as your app.get('/') route

//express.static //(https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express)