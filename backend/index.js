import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './authRouter/AuthRouter.js';
const app=express();


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
dotenv.config();
app.use("/api/auth", router)
const port = process.env.Port || 5000;

app.listen(port,()=>{
    console.log(`the server port is ${port}`)
})