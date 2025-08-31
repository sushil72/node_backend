import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
const app = express();
const port = process.env.PORT;

// Basic CORS usage - allows all origins
app.use(cors());

// OR use configured CORS (uncomment and modify as needed)
// const corsOptions = {
//     origin: ['http://localhost:3000', 'https://yourdomain.com'],  // Allow specific origins
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'],             // Allowed headers
//     exposedHeaders: ['Content-Range', 'X-Content-Range'],         // Expose these headers
//     credentials: true,                                            // Allow cookies
//     maxAge: 86400                                                // Cache preflight for 24 hours
// };
// app.use(cors(corsOptions));

app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "success implement"
    });
});
app.use("/api", userRoutes);
app.listen(port, ()=>{
    console.log(`Server Started on the ${port} port...`);
})