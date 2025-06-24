import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import { connectDB } from "./db/index.js";
//Alternate import for dotenv
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

connectDB()
  .then()
  .catch(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
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
