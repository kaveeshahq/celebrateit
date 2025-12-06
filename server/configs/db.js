import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    const uri = process.env.MONGODB_URI;
    console.log("URI:", uri); // debug

    await mongoose.connect(`${uri}/greencart`, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB Connected:", mongoose.connection.host);
  } catch (err) {
    console.error("❌ Mongoose connection FAILED:", err.message);
  }
};

export default connectDB;
