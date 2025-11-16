import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import DataBase from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
dotenv.config()

const app= express()
const PORT=process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({

}))
app.use('/api',authRoutes)

app.get('/',(req,res)=>{
    res.send("heheheheheehehehe Adaat For kriti karna hai toh karna hai ")
})

app.listen(PORT,()=>{
    DataBase.connectDB()
    console.log(`Server Started`);
})
