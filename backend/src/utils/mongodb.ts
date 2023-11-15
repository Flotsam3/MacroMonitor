import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "default";

mongoose.connect(MONGO_URL,{dbName:process.env.DATABASE})
    .then(()=>console.log("Connected to mongoDB!"))
    .catch(()=>console.log("Connection error!"))