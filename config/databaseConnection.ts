import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
  } catch (err: any) {
    console.error(`${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
