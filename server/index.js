import express from "express";
import mongoose from "mongoose";
import bodyParser from  "body-parser"
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/staffroute.js";

const app =express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())
dotenv.config();

mongoose.connect("mongodb://localhost:27017/shipping").then(()=>{
    console.log("DB create ");

    app.listen(PORT,()=>{
        console.log(`Server is running ${PORT}`);
    })
})
.catch(error=>console.log(error));

app.use("/api", router)
