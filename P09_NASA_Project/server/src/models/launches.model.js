const launches = new Map();

let latestFlightNumber = 100;

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

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
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
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
};