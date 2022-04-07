const mongoose = require("mongoose"); // mongo db
const dotenv = require("dotenv").config(); // get env config

const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fhett.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connection = async () => {
  try {
    const status = await mongoose.createConnection(dbUrl).asPromise();
    console.log("db connected");
    return status;
  } catch (error) {
    console.error(error);
    return error;
  }
};
connection();
module.exports = connection;
