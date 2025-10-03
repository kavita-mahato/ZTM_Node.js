const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');

const DEFAULT_FLIGHT_NUMBER = 100;

const launches = new Map();

const launch = {
    flightNumber: 100, // flight_number
    mission: 'Kepler Exploration X', // name
    rocket: 'Explorer IS1', // rocket.name
    launchDate: new Date('December 27, 2030'), // date_local
    target: 'Kepler-442 b', // not applicable
    customers: ['ZTM', 'NASA'], // payload.customers for each payload
    upcoming: true, // upcoming
    success: true, // success
};

saveLaunch(launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

async function getlatestFlightNumber(){
    const latestLaunch = await launchesDatabase
        .findOne()
        .sort('-flightNumber');
    
    if(!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER;
    }
    return latestLaunch.flightNumber;
}

async function getAllLaunches() {
    return await launchesDatabase
        .find({}, {'_id': 0, '__v':0});
}

async function saveLaunch(launch){
    const planet = await planets.findOne({
        keplerName: launch.target,
    })

    if(!planet){
        throw new Error('No matching planet found!'); 
    }

    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    })
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        customers: ['ZTM', 'NASA'],
        flightNumber: latestFlightNumber,
        success: true,
        upcoming: true,
    }));
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
};