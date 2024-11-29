import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../utils/logger";
dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || "";

  if (!mongoURI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err: any) {
    logger.error(`Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
