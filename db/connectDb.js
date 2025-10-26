import mongoose from "mongoose";

const connectDb = async () => {
  // 1. Check if we are already connected
  // readyState 1 = connected
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // 2. If not connected, establish a new connection
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env.local");
    }
    
    await mongoose.connect(process.env.MONGODB_URI);
    
    // 3. Add the success console log
    console.log("✅ MongoDB connected successfully!");

  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    // Exit the process with failure
    process.exit(1); 
  }
};

export default connectDb;