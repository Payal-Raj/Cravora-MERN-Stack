import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

dotenv.config();

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//dbconnection
connectDB();

//appendpoints A specific URL where your API receives or sends data.
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/",(req, res) =>{
    res.send("API WORKING")
})

app.listen(port, () =>{
    console.log(`Server Started on http://localhost:${port}`)
})
