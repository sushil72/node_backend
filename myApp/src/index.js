import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import { connectDB } from "./db/index.js";

// Load .env
dotenv.config({ path: "./env" });

// Initialize express app
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Optional: stop the app if DB connection fails
  });

// require("dotenv").config({path:'./env'});

//FIRST Approach: Using Mongoose to connect to MongoDB
/* 
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error in Express app:", error);
      throw error;
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();

*/
