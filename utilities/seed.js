import mongoose from "mongoose";
import dotenv from "dotenv";
import Books from "../models/bookSchema.js";
import data from "./data.js";

dotenv.config();
// console.log(config);

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting Seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await Books.deleteMany({});
    console.log("✅ Deleted Previous");

    await Books.create(data);
    console.log("✅ Added New Books");

    console.log("🎉 Successfully Seeded");
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
}

seedDatabase();