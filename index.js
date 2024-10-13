const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

const PORT = 3000;

app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})