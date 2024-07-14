const express=require("express")
const bcrypt=require("bcrypt")
const userModel=require("../models/userModel")
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userRoutes=express.Router()


userRoutes.post('/register',async (req,res)=>{
    let rawPass=req.body.password
    let encPass=await bcrypt.hash(rawPass,10);
    let user=new userModel({...req.body,password:encPass})
    await user.save();
    res.json({msg:"Registration Successful",status:true})

})
const generateAcessToken=(payload)=>{
    return jwt.sign(payload,process.env.ACCESS_SECURITY_KEY,{expiresIn:'3h'});    
}
userRoutes.post('/login',async (req,res)=>{
    let data = req.body;
    let userData = await userModel.find({user_name:data.user_name});
    
    if(userData.length<=0){
        res.json({msg:"Invalid User Name",status:false});
    }
    else{
        let validPass=await bcrypt.compare(data.password,userData[0].password);
        if(validPass){
            let access_token=generateAcessToken(data)
            res.json({msg:"Login Successful",status:true,token:access_token})
        }
        else{
            res.json({msg:"Invalid Password",status:false})
        }
    }
})
module.exports=userRoutes;