const { connect } = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI || "mongodb://localhost:27017/social-media", {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;