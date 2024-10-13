const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const app = express();
dotenv.config();
connectDB();

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})