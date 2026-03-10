// Imports
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/conn.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Use this when not deployed
// const PORT = process.env.PORT ;  //  // Use this when deployed
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/books", bookRoutes);

// Global Err
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});
