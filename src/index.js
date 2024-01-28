import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 8080;

async function startServer(){
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server listening on http://localhost:${PORT}`);
        })
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

startServer();

