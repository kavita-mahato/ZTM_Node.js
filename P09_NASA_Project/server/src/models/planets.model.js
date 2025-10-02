const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

// Import the Mongoose model we created
const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          savePlanet(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets found!`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await planets.find({});
}

async function savePlanet(planet) {
  try{
    await planets.updateOne({
      keplerName: planet.keplerName,
    },{
      keplerName: planet.keplerName,
    },{
      upsert: true,
    });
  } catch(err){
    console.error(`Could not save planet ${err}`);
  }
}

  // Create/update a new planet document in MongoDB
  await planets.updateOne(
    {
      keplerName: data.kepler_name,
    },
    {
      keplerName: data.kepler_name,
    },
    {
      upsert: true,
    }
  );

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
