const {parse} = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({  // pipe is a method that takes a readable stream and turns it into a writable stream
        comment: '#',
        columns: true, // this will return each row as an javascript object with key value pairs rather than an array of values in a row
    }))
    .on('data', (data) => {
        if(isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end',() => {
        console.log(habitablePlanets); 
        console.log('done');
    });
// parse();