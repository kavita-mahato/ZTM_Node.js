const mongoose = require('mongoose');

const MONGO_URL =
  "mongodb+srv://kavita-mahato:6138112A@nasacluster.6bs4hiv.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

// runs once when the connection is successfully opened.
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

// listens continuously for any connection errors.
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
   await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}