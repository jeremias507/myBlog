import express from "express";
import dotenv from "dotenv" 
import cors from "cors"
import morgan from "morgan"
import cookieParser  from "cookie-parser"
import bodyParser  from "body-parser"
import itemRouters from "./routes/index"

const app = express()
dotenv.config()
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
app.use(itemRouters)
app.listen(3000,()=>{
    console.log("Server on port",3000)
})


