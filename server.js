// Imports
import express from "express"
import dotenv from dotenv

// Setups
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(express.json())

// Routes


// Global Err

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`)
} )