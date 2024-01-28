import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.json({
    limit: "16kb",
}));
app.use(cookieParser());
app.use(express.urlencoded({extended:false,limit:"16kb"}));
app.use(express.static("public"));


app.get('/',(req,res)=>{
    return res.send("Hello World!")
})

export default app;