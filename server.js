// Imports
import express from "express"
import dotenv from "dotenv"
import {logReq, globalErr} from "./middleware/middlewares.js"
import cors from "cors"

// Setups
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors())
app.use(express.json())
app.use(logReq)

// Routes


// Global Err
app.use(globalErr)

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`)
} )