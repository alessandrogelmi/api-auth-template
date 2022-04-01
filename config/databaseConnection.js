const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
  } catch (err) {
    console.error(`${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
