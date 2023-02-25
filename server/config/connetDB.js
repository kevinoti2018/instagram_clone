const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.MONGODB_URI;
// const connectionString = process.env.Mongo_uri;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Connected to MongoDB`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit();
  }
};
module.exports = connectDB;
