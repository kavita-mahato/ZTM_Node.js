const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://kavita-mahato:6138112A@nasacluster.6bs4hiv.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

const server = http.createServer(app);

// runs once when the connection is successfully opened.
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

// listens continuously for any connection errors.
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  // Connect to MongoDB
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
}

startServer();
