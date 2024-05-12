const Users = require("../model/user");
const bcrypt =require ("bcrypt")
const nodemailer=require ("nodemailer")
const jwt=require("jsonwebtoken")
require("dotenv").config();

const transport =nodemailer.createTransport({   // In Nodemailer, a transporter is an object that can send mail. To send messages, 
    service:"gmail",
    auth:{                    //https://nodemailer.com/smtp/customauth/#:~:text=Nodemailer%20SMTP%20client%20can%20be,identifier%20as%20the%20handler%20name.
        user: process.env.USER,
        pass: process.env.PASS
    } ///we can directly put email and pass but we stored it in env variables
});

const generateOtp = ()=>{
    return Math.floor(Math.random()*10000)
}

const registerUser = async(req,res)=>{ //async approach  // iss func ko side me jayenge so that it doesnot affect sync cycle/callstack AND await as un operation rok dega UNTIL promise is settled
    try {
        const {name, email, password, gender} =req.body;  //get data from body //req.body take json data,  res.body we need to parse JSON.parse()
        
        const existing = await Users.findOne({email});  //use email from req.body and check it in database
        if(existing){
            return res.status(400).json({
                success: false,
                message: "already exist"
            })
        }
        else{
            const otp = generateOtp() //we saved the otp in database

            //https://blog.logrocket.com/password-hashing-node-js-bcrypt/
            const hashpassword =  await bcrypt.hash(password,10)//10 is saltrounds //The salt rounds are the number of times the password is hashed   A higher saltRounds ensures more complex and secure hashes are used. However, setting this too high can take a really long time resulting in a bad user experience.
            // const excart = await Users.findOne({cart});
            
            
            const newUser = new Users({
                name,
                email,
                password:hashpassword,
                gender,
                otp
            });
            
            const savedUser = await newUser.save()
            const info ={ 
                from: process.env.USER,
                to: email,
                subject: "Verify OTP",
                text:`OTP is ${otp}`
            }
            await transport.sendMail(info); //https://nodemailer.com/transports/sendmail/
            res
                .status(201)
                .json({ success:true, message:"user registered. Verify your otp", user:savedUser})
        }  
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const verifyotp =async(req,res)=>{
    try {
        const {email,otp}=req.body;
        const user = await Users.findOne({email}) 
        if(!user){
            res.status(400).send("user not found")
        }
        if(user.otp !=otp){  //if user is found above(by email) we can get its otp from databse and match it
            res.status(400).send("otp is incorrect")
        }
        else{
        user.isVerified = true;
        user.otp = null   //otp will be removed here
        await user.save()
        res.status(200).json({success:true, message:"Account verified successfully"})
        }
    } catch (error) {
        // res.send(error)  HERE SERVER WILL STOP
    }
}
const loginuser=async(req,res)=>{
    try {
        console.log("uughfgff");
        const {email,password}=req.body
        console.log(password);
        console.log("qqqq");
        const exist=await Users.findOne({email})
        if(!exist){ 
            res.status(400).json( {success:false,message:"User not Exist"})
        }
        console.log(exist.password);
        const ismatchedpassword= await bcrypt.compare(password,exist.password);
        console.log("eeeee");
        if(!ismatchedpassword){
            res.status(400).json({success:false,message:"password is incorrect"})
        }
        console.log(exist.isVerified);
        if(!exist.isVerified){
            console.log("not");
            res.status(400).json({success:false,message:"user not verified"})
        }
        const token = jwt.sign(
            {userid : exist._id},
            process.env.JWT_SECRET_KEY 
        )
        
        exist.token = token 
        const saveduser=await exist.save() 
        res.cookie("token",token,{
            httpOnly:true, 
            expires:new Date(Date.now()+600000)
        }
        )
        console.log("hjghg");
        res.status(200).json({success:true,message:"Login successfull", user: saveduser})
    } catch (error) {
        console.log("to");
        // res.send(error)
    }
}
const logoutuser =async(req,res)=>{
    
    try { 
        const{email,cart,wish}=req.body;
        console.log(cart);
        console.log(cart.length);
        // const saved=await Users.updateOne({email: emails}, {$set:{cart:carts}});
        const ex=await Users.findOne({email})
        console.log(ex.Cart);
        // const hj=Array.from(cart)
        // hj.foreach((a)=>{
        //     ex.Cart.push(a) 
        // })
       //ex.Cart=cart 
        ex.Cart=cart
        ex.Wishlist=wish
        ex.token="" 
        console.log("yutyrttyrerterew");
        // ex.isVerified=false
        res.clearCookie("token")
        await ex.save(); 
        res.status(200).json({success:true,message:"Logged out successfully",user:""})

        // res.json(updatedDoc);
        // console.log("jkh");
        // const exist= await Users.findOne({email})
        // if(exist){
        //     exist.cart=cart,
        //     exist.isVerified = true; 
        //     const saved=await exist.save()
        //     res.status(200).json({success:true,message:"Logged out successfully"})
        // }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}



module.exports ={registerUser,verifyotp,loginuser,logoutuser} 