const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const db=mongoose.connect("mongodb+srv://dawar:Tiagitc@cluster0.07wbnuj.mongodb.net/")
const userRoutes=require("./routes/userRoutes")
const authRoutes=require("./routes/validationRoutes")
const postRoutes=require("./routes/postRoutes")

const PORT=5000;
const server=express();
server.use(express.json());
server.use(cors());
server.use('/socialMedia/user',userRoutes)
server.use('/socialMedia/authToken',authRoutes)
server.use('/socialMedia/post',postRoutes)


server.listen(PORT,()=>console.log(`Server is running at port:${PORT}`))
