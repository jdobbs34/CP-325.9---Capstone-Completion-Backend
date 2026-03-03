import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function connectDB() {
  try {
    await mongoose.connect(connectionStr);

    console.log(`MongoDB Connected...`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectDB;
