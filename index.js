const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const app = express();
app.use(express.json());
dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})