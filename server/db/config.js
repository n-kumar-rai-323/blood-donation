const mongoose = require("mongoose");

const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blood-bank");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = dbconnection;