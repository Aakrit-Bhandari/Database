
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
            "mongodb+srv://admin:aashwingargee@cluster0.djvthcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };