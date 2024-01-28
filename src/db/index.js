import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(`mongodb+srv://atanu192003mojumdar:${process.env.MONGO_PASSWORD}@cluster0.gxr7a7b.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);

        console.log("MongoDB Connected!");
    }
    catch(err){
        console.log("MongoDB connection failed!");
        process.exit(1)
    }
}

export default connectDB;