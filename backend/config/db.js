
const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    const connection = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10,
    });

    console.log(
      `MongoDB connected: ${connection.connection.host}`
    );

    return connection;
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    throw error;
  }
};

module.exports = connectDB;
