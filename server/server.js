import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import cookieParser from "cookie-parser";

const app = express();

const port = process.env.PORT || 8000;
const dataBaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/";

// Database connections
connectDB(dataBaseURL);

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(() => {
  console.log(`server is running at port ${port}`);
});
